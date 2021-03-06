Title: Tricked out iterators in Julia
Date: 2014-01-13 15:15
Author: Carl
Category: Julia
Tags: julia
Slug: julia-iterators


<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="./scripts/gadfly.js"></script>

## Introduction ##

I want to spend some time messing about with iterators in Julia. I think they
not only provide a familiar and useful entry point into Julia's type system and dispatch
model, they're also interesting in their own right.<a name="fnm-multdisp" href="#fn-multdisp" class="footnote-mark">1</a> Clever application of iterators can
help to simplify complicated loops, better express their intent, and improve
memory usage.

A word of warning about the code here. Much of the it isn't idiomatic Julia and I wouldn't
necessarily recommend using this style in a serious project. I also can't speak
to its performance vis-a-vis more obvious Julian alternatives. In some cases,
the style of the code examples below may help reduce memory usage, but
performance is not my main concern. (This may be the first blogpost about Julia
unconcerned with speed). Instead, I'm just interested in different ways of
expressing iteration problems.

For anyone who'd like to play along at home, there's an IJulia notebook of
this material on [Github][nbgit], which can be viewed on nbviewer [here][nbview].

## The Iterator Protocol ##

What do I mean by iterators?<a name="fnm-iterable" href="#fn-iterable"
class="footnote-mark">2</a> I mean any `I` in Julia that works on
the right hand side of the statement `for i = I ...`. That is, anything you can for-loop
over. This includes not only data collections like Arrays, Dicts, and Sets, but
also more abstract types like Ranges, as well as what I'll call "higher order"
iterators such as those that result from `zip` or `enumerate` functions.

As an equivalent definition, an iterator in Julia is any type that implements
the **iterator protocol**. The iterator protocol is comprised of three methods:
`start`, `next`, and `done`. So any type in Julia for which these three methods
are defined is an iterator. It might be a dumb iterator or a broken iterator,
but it's an iterator. 

Since the `for` statement works on iterators, and iterators are just a
collection of methods, we can define any for loop using calls to those methods. 

For example, this simple for loop

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
arr = [10:-2:1]
for i = arr
	println(i^2)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
100
 64
 36
 16
  4
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

is equivalent to this

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
state = start(arr);
while !done(arr, state)
    i, state = next(arr, state)
    println(i^2)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
100
 64
 36
 16
  4
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this example, the `start` method provides the initial state of the iterator;
the `next` method returns the value of the array at a given state, as well as what the
next state is. Finally, the `done` method returns `true` when we've gone past
the end of the iterator, informing the loop that it should stop.

If you know Python, the idea of the iterator protocol is probably familiar. In
Python, any object can be an iterator if it has the methods `__iter__` and
`__next__`. But notice the lack of side effects in the Julia implementation
--calling `start` or `next` on the array has no affect on the array itself. `start` is
basically a constant, always returning the value of the initial state whenever
you pass it the same type of iterator. And `next` doesn't really increment
anything; it's just a mapping from *current state &rightarrow; (value, next
state)*. In general, the iterator itself has no internal state being incremented or
changed as you pass through a loop.


## An iterator's state ##

More concretely, what's the *state* of an iterator? How the state is
defined, and an iterator's sequence of states depends on the type of
the iterator itself. It's best to look at some examples.

### Arrays. ###

Arrays are very intuitive iterators. They have states that are just integer
values from 1 to the length of the array. So `start` returns 1.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
arr = ["one", "two", "three", "four", "five", "six"]
start(arr)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
1
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `next` mapping is *i* &rightarrow; *i+1*, and the value of the iterator at any state
`i` is just `a[i]`. 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
for i = 1:4
    println("next(arr, $i) = ", next(arr, i))
end

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		   
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
next(arr, 1) = ("one",2)
next(arr, 2) = ("two",3)
next(arr, 3) = ("three",4)
next(arr, 4) = ("four",5)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this were a multidimensional array, say 3&times;2 instead of 6&times;1, we'd
get the same result; iteration would just proceed along the rows of the matrix.

The `done` method returns true when the state is `i =
length(a) + 1`. You might think it'd be `length(a)`, but recall the for-equivalent while loop
above. Having `done` return true at the last index of the array would prevent
the loop from executing on the last element. So in our 6-element array, `done`
is true when the state hits 7.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
println(done(arr, 6))  # not yet
println(next(arr, 6))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
false
("six",7)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
done(arr, 7)	
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
true
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Ranges ###

Ranges have states that looks similar to arrays, except they start at zero.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
rng = 11:20  # length 10 range
start(rng) # 0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

But the relationship between the current and next state is the same: *i* &rightarrow; *i+1*.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
for i = [0, 1, 9, 10]
    println("next(rng, $i) = ", next(rng, i))
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
next(rng, 0) = (11,1)
next(rng, 1) = (12,2)
next(rng, 9) = (20,10)
next(rng, 10) = (21,11)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Since we start at zero, the done state is one less than the equivalent array.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
done(rng, 10)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
true
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Unordered collections: Dicts, Sets, etc. ###

Arrays and ranges have a natural order, so the evolution of state is
straightforward. But what about collections such as dictionaries and sets that have no inherent
order? Like in many languages, such things can be iterated over, but the order
of iteration is not easily predictable.

For example, here's a dictionary:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
dictit = {:one => 1, :three => 3, :five => 5, :five => "five!"}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
{:one=>1,:three=>3,:five=>"five!"}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The starting state isn't 0 or 1, as would be natural for an ordered collection.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
s0 = start(dictit)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

And while `next` maps state *i* to state *j*, the relationship between *i* and *j*
is not obvious. Here, while the first state is 3, the second is 11, and the rest
are similarly weird.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
_, s1 = next(dictit, s0)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
((:one,1),11)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
_, s2 = next(dictit, s1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
((:three,3),13)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
_, s3 = next(dictit, s2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
((:five,"five!"),17)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
done(dictit, s3)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
true
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The states, you probably and correctly suspect, are tied to the internal
implementation of the dictionary, e.g. how the keys are hashed. So the state
doesn't follow a predictable 1, 2, 3, ... order, and what order of elements we
get when iterating is essentially unpredictable.

But because for loops handle the iterator's states for us, we rarely if ever have to worry about
the representation of an iterator's state. The for loop implicitly calls the `start`,
`done`, and `next` methods, which do all this bookkeeping for us.

## Iterators and Delayed Evaluation ##

While many iterators are collections of data in memory, like Arrays, Dicts, or
Sets, iterators can also represent abstract collections that aren't held in memory.

Range is a good example. When we iterate over the range `1:10`, we get the
sequence 1, 2, 3, ..., 10. But in memory, this range is comprised of only two
integers, 1 and 10. The values in between are only evaluated when we're looping over it.

From [https://github.com/JuliaLang/julia/blob/master/base/range.jl](), here's how a
Range's iterator protocol is defined:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
start(r::Ranges) = 0
next{T}(r::Range{T}, i) = (oftype(T, r.start + i*step(r)), i+1)
next{T}(r::Range1{T}, i) = (oftype(T, r.start + i), i+1)
done(r::Ranges, i) = (length(r) <= i)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Notice that the `next` method calculates the value of the iterator in state
`i`. This is different from an Array iterator, which just reads the element
`a[i]` from memory.

Iterators that exploit delayed evaluation like this can have important performance
benefits. If we want to iterate over the integers 1 to 10,000, iterating over an
Array means we have to allocate about 80MB to hold it. A Range only requires
16 bytes; the same size as the range 1 to 100,000 or 1 to 100,000,000.

### Application: Iterating over Fibonacci numbers ###

Here's another example of an iterator which computes values on demand, using the
`next` method to do the work. `fibit(n)` is an iterator over the first `n`
Fibonacci numbers. When the iterator is constructed, it doesn't calculate all of
these numbers. Instead it waits for its `next` method to be called, providing
the next Fibonacci number depending on the current one.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
# Iterator produces the first n Fibonacci numbers
immutable FibIt{T<:Integer}
    last2::(T, T)
    n::Integer
end

fibit(n::Integer) = FibIt((0, 1), n)
# Specify types, e.g. BigInt to prevent overflow.
fibit(n::Integer, T::Type) = FibIt{T}((0, 1), n) 

Base.start(fi::FibIt) = 1

function Base.next(fi::FibIt, state)
    if state == 1
        return (1, 2)
    else
        fi.last2 = fi.last2[2], sum(fi.last2)
        (fi.last2[2], state + 1)
    end
end

Base.done(fi::FibIt, state) = state > fi.n
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
for i = fibit(10)
    print(i, " ")
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
1 1 2 3 5 8 13 21 34 55
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


### Tasks/Co-routines ###

This talk of iterators with delayed evaluation may remind Pythonistas of
generators. And Julia has a type that is basically equivalent to Python's
generators, called Tasks. A Task is constructed by calling the `Task()` 
constructor (or
`@task` macro) on a function with a `produce` statement, which issimilar to Python's
`yield`.

Instead of using the `Fibit` type above, we could get an equivalent iterator by
defining a Task that produces sequential Fibonacci numbers.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
function fibtask(n::Integer, T::Type)
    a, b = (zero(T), one(T))
    produce(1)
    function _it()
        for i = 1:n
            produce(b)
            a, b = (b, a+b)
        end
    end
    Task(_it)
end

fibtask(n::Integer) = fibtask(n, Int)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once we've made the task, we get iteration for free.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
for i in fibtask(10)
    print(i, " ")
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
1 1 2 3 5 8 13 21 34 55
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Whether you create an iterator using a type with the iterator protocol, or by
constructing a Task, is up to you. There are pros and cons to each approach. By
defining your iterator as a specific type, you can dispatch lots of other
functions on it. Here, on the other hand, `fibtask` is just a `Task` type, so
defining methods for it means defining methods for all Tasks, which may be
undesirable or infeasible. On the other hand Tasks give you iterators with less
code. Below I'll show an example of an iterator that's hard to define with the
iterator protocol methods, but easy to define as a Task. And of course, Tasks
are coroutines, and can be used in those contexts.

## Realizing Iterators without loops ##

So far, we've talked about iterators in the context of for loops. We saw that
`for i = I` was a construct for calling `I`'s `start`, `done` and `next`
methods, letting us realize and operate on the values in the iterator.

But there are functions which can take iterators as inputs and implicitly iterate over them
to some desired result. This obviates the need for explicit for loops, and can
make for cleaner more functional code. Some examples follow.


### `collect` and `reduce` ###

The `collect` function takes an iterator input, realizes all its values, and
*collects* them into an array.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
collect(fibit(10))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
10-element Array{Any,1}:
  1
  1
  2
  3
  5
  8
 13
 21
 34
 55
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `reduce` function similarly realizes the values of an iterator, but then successively
applies an operator to them to give a scalar result.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
reduce(+, fibit(10))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
143
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

That reduce operation is equivalent to the `sum` function called with an
iterator argument.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
sum(fibit(10))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
143
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this next line of code, I compute the sum of the reciprocals of the first
10,000 Fibonacci numbers (which should be close to [this][fibrecip]), using `collect` to first put them into an array.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
sum(1 ./ collect(BigInt, fibit(10_000, BigInt)))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
3.359885666243177553172011302918927179688905133731968486495553815325130318996609
e+00 with 256 bits of precision
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


### Comprehensions ###

The `collect` function may remind you of an array comprehension, and it is
similar, but here we see array comprehension don't work on our iterator:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
[f for f = fibit(10)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
no method length(FibIt{Int64})
while loading In[26], in expression starting on line 1
 in anonymous at no file
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What's going on is that the array comprehension wants to allocate an array,
then fill it in with the values of the iterator. Since it doesn't know the
iterator's length (how many values it will produce), it doesn't know how large
an array to allocate.<a name="fnm-arrcomp" href="#fn-arrcomp"
class="footnote-mark">3</a> We can fix this for our Fibonacci iterator by
giving it a `length` method.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
Base.length(it::FibIt) = it.n
[f for f = fibit(10)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
10-element Array{Int64,1}:
  1
  1
  2
  3
  5
  8
 13
 21
 34
 55
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now we can redefine our sum-of-reciprocals using a comprehension instead of `collect`.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
sum([1/f for f = fibit(10_000, BigInt)])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
3.359885666243177553172011302918927179688905133731968486495553815325130318996712
e+00 with 256 bits of precision
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What if we tried this with our Fibonacci task?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
[f for f = fibtask(10)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
no method length(Task)
while loading In[27], in expression starting on line 1
 in anonymous at no file
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We get the same issue; Tasks don't have a length method. The advantage of using
the `FibIt` type is that we can easily define a length method for it. We can
only give our Fibonacci task a method if we give all Tasks a length method,
which wouldn't make sense.

## The Iterator Package ##

When we calculated the sum of the reciprocals of Fibonacci number above, we had
to realize the values of the Fibonacci iterator before taking the
reciprocal, and then sum a collection of all those values. Alternatively, we could have called sum on an
iterator that produced *1/x* for each Fibonacci number *x*.

One way to do this would be to create a new iterator type, called
`ReciprocalFibIt`, and given it its own `start`, `next`, and `done` methods. But that
feels a little excessive. Wouldn't it be nicer to be able to construct that iterator from
the Fibonacci iterator we already have? Essentially saying, "hey, I want another
iterator that gives one over the values of that other iterator."

That would be an example of what I'll call a *higher-order iterator*, which is
an iterator constructed from one or more other iterators. `zip` and `enumerable`
are common examples.

It turns out Julia has a neat little package of useful higher-order iterators;
called, obviously, Iterators. In the rest of (this already very long) post, I'll
explore some of things in the package. Pythonistas will notice similarities with
the itertools module in the Standard Library.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
using Iterators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


## Imap ##

The `Imap` iterator provides us with our wish above: a new iterator that is the
result of applying a function to the values of an existing iterator. In the case of our
reciprocal Fibonacci numbers, that function is `x -> 1/x`. 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
recipricalfib = imap(x -> 1/x, fibit(10_000, BigInt)) # A new iterator, composed
                                                      # from a FibIt
psi = sum(recipricalfib) # No collect needed
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
3.359885666243177553172011302918927179688905133731968486495553815325130318996609
e+00 with 256 bits of precision
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

So `reciprocalfib` is itself an iterator, whose values are only realized when
it's passed to the `sum` function. We didn't have to allocate any arrays before
calling sum as with the `collect` and comprehension examples above.

## An IFilter iterator ##

Since we have a map-like iterator, why not a filter?<a name="fnm-filter" href="#fn-filter" class="footnote-mark">4</a> How would it work? Given an
iterator that produces values *v1*, *v2*, *v3*, ..., the filter iterator would
only produce the values that met some predicate, skipping any that didn't.

This isn't implemented in the Iterators package (because `Base.filter` will
already do this, see [footnote 4][fn4link]). It's a neat idea, but it turns
out to be tricky to define in terms of the iterator protocol. It's easy with a
Task, though.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
function ifilter(f::Function, itr)
    function _it()
        for i = itr
            if f(i)
                produce(i)
            end
        end
    end
    Task(_it)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Application: A list of primes whose digits sum to a prime

Here's an example of it in action. We'll begin with a Range iterator from 1 to
1,000. I want to list all of numbers in that range that are (1) prime and
(2) have digits that sum to a prime. 

So `ifilter` takes the predicate test and the original iterator, then produces only
those values from the original iterator that pass the test. Turns out there are
89 such primes between 1 and 1,000.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
function funnyprimetest(n::Integer)
    sumdigits = sum([parseint(string(c)) for c in string(n)])
    isprime(n) & isprime(sumdigits)
end

collect(ifilter(funnyprimetest, 1:1000))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
89-element Array{Any,1}:
   2
   3
   5
   7
  11
  23
  29
  41
  43
  47
  61
  67
  83
   ⋮
 829
 863
 881
 883
 887
 911
 919
 937
 953
 971
 977
 991
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Repeat and RepeatForever ##

Another surprisingly useful iterator is `Repeat`, which simply produces an object
some number of times. Here the iterator is just the string "echo!" five times.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
for i = repeated("echo!", 5)
    println(i)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
echo!
echo!
echo!
echo!
echo!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If we didn't provide the second argument, the result would be an iterator that
goes on infinitely, so its for loop would never terminate. Why would you want
that? I'll show some examples of its use below.

### Extension: Repeating impure functions ###

One thing about the `Repeat` iterator though, is that the object or value it
repeats is fixed at its construction. If you pass it a called function, it will
call that function once in the constructor, and then repeatedly return the
result of that first call. For pure functions, that's fine. The first call of
`sqrt(100)` is the same as the second, third, or ten-thousandth call of
`sqrt(100)`.

If the function is impure, though, we'll get undesired results.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
for i = repeated(rand(), 10) println(i) end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
0.30142748588653046
0.30142748588653046
0.30142748588653046
0.30142748588653046
0.30142748588653046
0.30142748588653046
0.30142748588653046
0.30142748588653046
0.30142748588653046
0.30142748588653046
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here, the `rand` function was called once in the constructor, and that result was repeated again
and again. I'd prefer if I could get 10 separate calls to `rand`. Here's one way
to get this to work.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
Base.next(it::Iterators.Repeat{Function}, state) = it.x(), state - 1
Base.next(it::Iterators.RepeatForever{Function}, state) = it.x(), nothing

# Note the function isn't called in the constructor;
# the `next` function does this.
for i = repeated(rand, 10) println(i) end 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
0.6621100826024566
0.755346320113107
0.021395943367805037
0.7304018818932669
0.22941680891855865
0.966762896262876
0.13729437119070198
0.028788242666101915
0.5584434146272579
0.09166900954689794
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What I've done is create new `next` methods for the `Repeat` and `RepeatForever`
iterators. When the object of the iterators is a function, the `next` methods
call the function. By passing the iterator an uncalled function object, I avoid the call
in the constructor, and defer it to the `next` method.

## Take and Drop ##

The `Take` iterator only iterates over some specified first values of its input
iterator. It works well in combination with infinite iterators, like `RepeatForever`

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
randsforever = repeated(rand)

[r for r = take(randsforever, 10)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
10-element Array{Any,1}:
 0.719153
 0.660597
 0.280763
 0.54125 
 0.427029
 0.919311
 0.165029
 0.796911
 0.354417
 0.678271
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
[r for r = take(randsforever, 20)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
20-element Array{Any,1}:
 0.568741 
 0.614644 
 0.49445  
 0.0942616
 0.518134 
 0.126585 
 0.961748 
 0.698277 
 0.0805089
 0.32351
 0.797422 
 0.513762 
 0.601515 
 0.616174 
 0.460832 
 0.813204 
 0.172391 
 0.444915 
 0.732941 
 0.0550762
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `Drop` iterator, on the other hand, *ignores* some specified first values of its
input iterator. So, how many values should be printed in this for loop?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
for i = drop(take(randsforever, 10_000), 9998)
    println(i)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Answer: just the last two, since we take 10,000 random numbers, but drop the first 9,998.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
0.26830900957427684
0.5141969888172926
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


### Extension: TakeWhile and TakeUntil ###

In some cases you may not want to take a fixed number of values from an
iterator, but instead you want to take values until some condition is met.

To accomplish this, I'll create a `TakeWhile` iterator, which takes values from
its input iterator so long as they pass some test.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
immutable TakeWhile{I}
    xs::I
    cond::Function
end

takewhile(xs, cond) = TakeWhile(xs, cond)
Base.start(it::TakeWhile) = start(it.xs)

Base.next(it::TakeWhile, state) = next(it.xs, state)

function Base.done(it::TakeWhile, state)
    i, _ = next(it, state)
    !it.cond(i) || done(it.xs, state)
end


tw = takewhile(1:10, x -> x^2 < 25)
collect(tw) 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
4-element Array{Int64,1}:
 1
 2
 3
 4
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's also create a `TakeUntil` iterator, which takes values until it finds one that
passes the test. So the last value produced by this iterator will pass the test
and all values before that will have failed.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
immutable TakeUntil{I}
    xs::I
    cond::Function
end

takeuntil(xs, cond) = TakeUntil(xs, cond)
Base.start(it::TakeUntil) = start(it.xs), false

function Base.next(it::TakeUntil, state)
    i, s = next(it.xs, state[1])
    i, (s, it.cond(i))
end


function Base.done(it::TakeUntil, state)
    s, iscond = state
    iscond || done(it.xs, s)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
collect(takeuntil(1:10, x -> x*x >= 25))  # x <= sqrt(25) -> 1:5
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
5-element Array{Any,1}:
 1
 2
 3
 4
 5
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


### Application: How long does it take a Poisson process to produce a prime number? ###
	
As an application of the `TakeUntil` iterator, an experiment. How many draws do
we have to make from a Poisson process until we draw a prime number? For this
example, I'll use a Poisson with mean 5,000.

In the code, we make a `Repeat` iterator that repeatedly draws from the
Poisson. We pass this into `takeuntil` and this creates an iterator that draws
from the Poisson until we find a prime number. While this is happening, we keep track of the
number of steps we took through this iterator.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
# Draw random integers from a distibrution d until you get a prime number.
# Return the number of draws.
function primetime(d, dparams)
    randgen = () -> rand(d(dparams...))
    tu = takeuntil(repeated(randgen), isprime)
    time = 0
    for i = tu
        time += 1
    end
    time
end

primetime_poiss5k = () -> primetime(Poisson, 5000)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What's the average wait for a prime? Repeating the experiment 10,000 times, we
find the average number of draws is between 7 and 8.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
mean(repeated(primetime_poiss5k, 10_000))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
7.6783
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To see the distribution of waiting times, I'll collect each repetition of the
experiment in an array that we can plot.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
times = [t::Int for t = repeated(primetime_poiss5k, 10_000)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

<div id="primetimechart"></div>
<script src="scripts/primetime.js"></script>
<script>
draw("#primetimechart");
</script>

## Partition ##

The `Partition` iterator split its input iterator into pieces, producing an
iterator over iterators. For example we could use it to partition the Range
iterator `1:100` into two iterators, `1:50` and `51:100`. We can also make
overlapping partitions, for example, `1:50`, `2:51`, `3:52`, etc. 

### Application: Moving average ###

One useful application of overlapping partitions is computing moving
averages. The following code imports Google's historical stock price from Yahoo
Finance and computes its 60-day moving average. 

First, we download the data, creating a 2-D array containing dates, volumes, and prices.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
const googdata =
    "http://ichart.finance.yahoo.com/table.csv?s=GOOG&d=0&e=7&f=2014&g=d&a=0&b=7&c=2013&ignore=.csv" |>
        download |>
        open |>
        readall |>
        s -> split(s, "\n") |> 
        a -> map(l -> split(l, ","), a) |>
        a -> filter(l -> contains(l[1], "201"), a) |>
        reverse  # Dates start at most recent, so reverse for chron order.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We then create iterators over the dates and closing prices in the Array. These
iteratively extract and parse values from the relevant columns.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
dates = imap(r -> date(r[1]), googdata)
close = imap(r -> parsefloat(r[7]), googdata)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now we can make 60-day sub-period partitions and compute the average of
each. Since I'm using `imap` nothing has been calculated yet. These are all just
iterators promising to do work when called.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
ma60 = imap(mean, partition(close, 60, 1))

# NB: The Julian way to do this would be
#     [mean(price[i-59:i]) for i = 60:length(price)]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

With all these useful iterators defined, I can just collect them into arrays for
plotting.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
plot(layer(x=collect(dates), y=collect(close), Geom.line),
     layer(x=collect(dates)[60:end], y = collect(ma60), Geom.line),
     Guide.ylabel("Price"),
	 Guide.title("GOOG Daily Stock Price 60-Day Moving Avg."))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

<div id="ma60chart"></div>
<script src="scripts/ma60.js"></script>
<script>
draw("#ma60chart");
</script>


## Groupby ##

While the `Partition` iterator makes partitions of specified lengths, the
`Groupby` iterator splits an iterator based on some condition. One caveat is
that the input iterator has to be sorted in some way on the groupby condition,
so that values with the same condition are adjacent in the iterator. 

### Application: Do Labor Force figures follow Benford's Law? ###

In this example, I'm going to look at [Benford's Law][benflaw] using the `Groupby`
iterator. Benford's Law posits that the leading digits of numbers in many
data sources follows a regular distribution. I'll use the `Groupby` iterator to
group the data by first digit and check this.


The data I'll examine is the size
of the labor force population in each U.S. county in 2012.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
const lfdata = "http://www.bls.gov/lau/laucnty12.txt" |>
                   download |>
                   open |>
                   readall |>
                   s -> split(s, "\r\n") |>
                   a -> filter(x -> length(x) == 125, a) |>  # Rows with data
                   a -> map(x -> strip(x[79:92]), a) |>      # Column w/ LF data
                   a -> map(x -> replace(x, ",", ""), a) |>  # 1,000 -> 1000
                   x -> x[2:end] |>                          # Remove header
                   sort                                    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The analysis is simple with a `Groupby` iterator. It splits up the data by
leading digit, and then I just calculate the frequency of each leading digit in
the data by taking the length of each leading-digit group as a share of
the total length of the data.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
dgroups = groupby(lfdata, s -> s[1]) # Groups by first digit
# Extract the digit from the group members
digits = imap(i -> parseint(string(i[1][1])), dgroups)
# Compute the frequency
frequency = imap(x -> length(x) / length(lfdata), dgroups)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Benford's Law posits that the frequency of digit *d* in data should be
log<sub>10</sub>(*d+1*) - log<sub>10</sub>(*d*). This function prints out a
table of the observed frequencies next to the expected frequencies per Benford's Law.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
benfordcheck = function(obs_freqs, digits)
    pred_freqs = map(d -> log10(d+1) - log10(d), digits)
    println("")
    println("Digit Frequency Compared to Benford's Law")
    println("=========================================")
    println("")
    println("Digit  Observed  Expected  Difference");
    for (d, o, e) in zip(digits, obs_freqs, pred_freqs)
        @printf( "%5d %9.2f %9.2f %11.2f\n", d, 100*o, 100*e, 100*(o-e))
    end

end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We can see the labor force data follows Benford's Law quite closely.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
benfordcheck(frequency, digits)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.text}
Digit Frequency Compared to Benford's Law
=========================================

Digit  Observed  Expected  Difference
    1     30.09     30.10       -0.01
    2     16.46     17.61       -1.15
    3     12.02     12.49       -0.48
    4      9.72      9.69        0.03
    5      8.29      7.92        0.37
    6      6.30      6.69       -0.39
    7      6.02      5.80        0.23
    8      5.84      5.12        0.72
    9      5.25      4.58        0.67
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To plot the comparison, I can collect the values from our iterators into a
DataFrame.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
benford_df = DataFrame(# Extract the digit
                       digits = collect(digits),
                       observed = collect(frequency),
                       expected = map(d -> log10(d+1) - log10(d), digits))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


<div id="barchart"></div>
<script src="./scripts/bl.js"></script>
<script>
draw("#barchart");
</script>


## Iterate ##

Though its name might be a little confusing, the `Iterate` iterator is one of my
favorites. It recursively applies a function to a starting value, that is
`f(...f(f(f(x)))...)`. I come across applications for it all over the place.

### Application: Autoregressive time series processes ###

One application is producing autoregressive time series processes. An AR(1)
process has the form *x<sub>t+1</sub> = px<sub>t</sub> + e<sub>t+1</sub>*, where
*e* is some random noise. If
We define the function *f(x) = px + e*, then *x<sub>t+2</sub>* as a function
of *x<sub>t<sub>* is *f(f(x<sub>t</sub>))*. Subsequent values can be similarly
produced by iteratively applying the function.

First the code for the AR(1) function itself, along with a helper function for
plotting a realization of the process.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
function ar(phi::Float64, sigma::Float64)
    x -> phi * x + sigma * randn()
end

plotar(arseq, title) = plot(x=1:length(arseq), y=arseq, Geom.line,
                            Guide.xlabel("Time"), Guide.ylabel(""),
							Guide.title(title))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Defining a coefficient and a standard deviation for the random variable, I pass
them through a process that creates an iterator that recursively applies the
function, starting with a randomly-drawn initial value. Then I collect 250 values of
that iterator and plot them.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
const ar1coef = 0.9
const ar1sigma = 0.15                                           
                                           
(ar1coef, ar1sigma) |>
    x -> apply(ar, x) |>
    f -> iterate(f, ar1sigma*rand()) |>
    i -> collect(take(i, 250)) |>
    s -> plotar(s, "AR(1) Time Series")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

<div id="ar1chart"></div>
<script src="scripts/ar1.js"></script>
<script>
draw("#ar1chart");
</script>


This idea can be extended an AR(p) process, where the current value of *x*
depends on several past values. Whereas the coefficient was a scalar in the
AR(1) model, it's a matrix now, but the formula is otherwise the same.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
function ar(coeffs::AbstractVector{Float64}, sigma::Float64)
    p = length(coeffs)
    Phi = [coeffs', eye(p)[1:(end-1),:]]
    Sigma = [sigma, zeros(p-1)]
    x -> Phi * x + Sigma .* randn(p)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For an example, here's 250-periods simulated from an AR(3) model.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{.julia}
const ar3coeffs = [.9, -.1, -.25]
const ar3sigma = 0.15

(ar3coeffs, ar3sigma) |>
    x -> apply(ar, x) |>
    f -> iterate(f, ar3sigma*rand(3)) |>
    i -> map(first, take(i, 250)) |>
    s -> plotar(s, "AR(3) Time Series")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

<div id="ar3chart"></div>
<script src="scripts/ar3.js"></script>
<script>
draw("#ar3chart");
</script>

## Conclusion ##

Most iteration you'll see in the wild uses simple collections or ranges as the
iterator, performing extensive work inside the loop. Sometimes our problem can be
better expressed using more complicated iterators whose structure represents the
logic of our iteration. One thing to notice in all the examples was that once
the iterators were defined, there was very little to do after iterating over
them. Typically I was just collecting the iteration values into an array, or
reducing them with an operation to a scalar result. We were also able to build
the problems in such a way that calculation of values in the iterators was
delayed until absolutely necessary.

There are tradeoffs to this sort of style, and much of the stuff in this
post was more cute than practical. But it was a fun exploration of how to create types
that interact with protocols in Julia. Julia's type system and dispatch design
are very powerful and interesting, and gives programmers a lot of flexibility in
expressing their problems.


-----------------
<ol class="footnotes">

<li><a name="fn-multdisp"></a>
While
we'll see lots of examples of extending Julia's base functions dispatched on
newly-defined types, we won't see much <i>multiple dispatch</i>, which is an
important design feature of Julia. In fact, pretty much everything here could be
implemented in a single-dispatch OO language.
<a href="#fnm-multdisp"><i class="fa fa-level-up"></i></a></li>

<li><a name="fn-iterable"></a>
Pythonistas
may be thinking about the distinction between <i>iterators</i> and <i>iterables</i>. (See,
e.g. <a href=" http://stackoverflow.com/questions/9884132/understanding-pythons-iterator-iterable-and-iteration-protocols-what-exact">this Stack Overflow thread</a>.) That distinction doesn't really apply to
Julia. So I won't use the term iterable here, and I'll define an iterator in the two
ways discussed above: (1) it is valid in a <code>for i = I</code> statement, and (2) it
implements the iterator protocol.
<a href="#fnm-iterable"><i class="fa fa-level-up"></i></a></li>

<li><a name="fn-arrcomp"></a>
This limitation seems
to come from the idea that only iterators with known lengths can be counted on
to produce multidimensional arrays. This may be changed in future versions of
Julia. See, e.g. <a href="https://github.com/JuliaLang/julia/issues/550">Issue #550</a>.  The <code>collect</code> function uses the
<code>push!</code> function to dynamically allocate the array, but <code>collect</code> can only give
a 1-D Array output, whereas comprehensions can be multidimensional.
<a href="#fnm-arrcomp"><i class="fa fa-level-up">
</i></a></li>

<li><a name="fn-filter"></a>
Actually, Julia's <code>filter</code> function already does this. If you pass
that function a predicate or condition function and an iterator, it produce a
<code>Filter</code> object that you can then iterate over. This is different from
<code>map</code> which can take an input iterator, but returns the result of
mapping the function immediately.
<a href="#fnm-filter"><i class="fa fa-level-up">
</i></a></li>


</ol>

[nbgit]: https://github.com/carljv/Julia-Iterators/blob/master/iterator_tricks.ipynb
[nbview]: http://nbviewer.ipython.org/urls/raw2.github.com/carljv/Julia-Iterators/master/iterator_tricks.ipynb?create=1
[fibrecip]: http://en.wikipedia.org/wiki/Reciprocal_Fibonacci_constant
[benflaw]: http://en.wikipedia.org/wiki/Benford%27s_law
[fn4link]: #fn-filter
