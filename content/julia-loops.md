Title: I've seen the best minds of my generation destroyed by Matlab ...
Date: 2013-05-11 16:52
Author: Carl
Category: Programming
Tags: julia, python, R
Slug: julia-loops

(Note: this is very quick and not well thought out. Mostly a
conversation starter as opposed to any real thesis on the subject.)

This post is a continuation of a Twitter conversation [here][], started
when John Myles White poked the hornets' nest. (Python's nest? Where do
Pythons live?)

<img src="../images/jmw_tweet.jpg" width=450px />

The gist with John's code is [here][1].

This isn't a very thoughtful post. But the conversation was becoming
sort of a shootout and my thoughts (half-formed as they are) were a bit
longer than a tweet. Essentially, I think the Python performance
shootouts--PyPy, Numba, Cython--are missing the point.

The point is, I think, that loops are a crutch. A 3-nested for loop in
Julia that increments a counter takes 8 lines of code (1 initialize
counter, 3 for statements, 1 increment statement, 3 end statements).
Only one of those lines tells me what the code does.

But most scientific programmers learned to code in imperative languages
and that style of thinking and coding has become natural. I've often
seen comments like this:

![forloop_tweet](../images/forloop_tweet.jpg)

Which I think simply equates readability with familiarity. That isn't
wrong, but it isn't the whole story.

Anyway, a lot of the responses to John's code were showing that, hey,
you can get fast loops in Python, with either JITing (PyPy, Numba) or
Cython. So here are my thoughts:

​1. Cython is great. I've used it with great success myself. But Julia
   gives me fast loops while keeping the dynamic typing; i.e., I'm still
   writing in Julia. Cython is a manifestation of what the Julia developers
   call the "two-language problem."  My programmer-productivity happens in
   the slow, dynamic language, and I swap to a more painful language for
   critical bottlenecks and glue the two together. Cython is a more
   pleasant manifestation of the problem, especially since it lets you
   evolve in an exploratory, piece-meal way from your first language to
   your second language. But you still end up with code that is nice
   dynamic-typing and abstractions on the outside; gross static typing and
   low-level imperative stuff on the inside. (And Cython examples are often
   clean and simple, but the code can get hairy very quickly.)

​2. One of the nice things about the slow for loops in Python and R is
   that they force you to think about other ways to express your problem. R
   and Python programmers start thinking about how they can exploit arrays
   and other ADTs, and higher-order functions to express they're problem.
   Avoiding the loop performance hit is the first reason, but then many of
   them start to realize they like their code better this way. The
   adjustment is hard at first, but once you get their, it's hard to go
   back.

Forget about the Numpy, PyPy, Cython solutions to John's problem. I
think it's safe to say his original pure Python code would be considered
pretty un-Pythonic, to the extent that's a thing. Python programmers are
discouraged from that style of writing-C-in-Python, for both performance
reasons, and conceptual reasons. Python programmers just think the
alternatives (e.g. list comprehensions) are more expressive and
maintainable. They're not avoiding for loops because they're slow: they
don't **want** to write for loops.

Maybe Julia is the answer to this
problem. Since list comprehensions, higher-order-functions (applies,
maps, etc.) wrap imperative loops, and Julia loops are fast, then these
things can be written in Julia and be fast.

But that requires some thought about how
Julia devs want Julia programmers to program. Julia is great and
really promising, and it's got an opportunity to let scientific
programmers really raise their game. But I'd hate the big pitch for
Julia to be: hey, you can write fast loops! And it would basically
become a refuge for people who never learned to properly code R and are
are fed up with slow loops, or for Matlab guys who's licenses ran out.

  [here]: https://twitter.com/johnmyleswhite/status/332920041626554369
  [1]: https://gist.github.com/johnmyleswhite/5556201
