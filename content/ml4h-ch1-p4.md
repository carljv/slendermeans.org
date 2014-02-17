Title: <i>Machine Learning for Hackers</i>, Chapter 1, Part 4: Data aggregation and reshaping.
Date: 2012-04-26 04:00
Author: Carl
Category: Will it Python
Tags: machine learning, python, R
Slug: ml4h-ch1-p4

## Introduction

In the [last part][] I made some simple summaries of the cleaned UFO
data: basic descriptive statistics and historgrams. At the very end, I
did some simple data aggregation by summing up the sightings by date,
and plotted the resulting time series. In this part, I'll go further
with the aggregation, totalling sightings by state and month.

This takeaway from this part is that Pandas dataframes have some
powerful methods for aggregating and manipulating data. I'll show
`groupby`, `reindex`, hierarchical indices, and `stack` and `unstack` in
action.

## The shape of data: the long and the wide of it

The first step in aggregating and reshaping data is to figure out the
final form you want the data to be in. This form is basically defined by
*content* and *shape*.

We know what we want the content to be: an entry in the data should give
the number of sightings in a state/month combination.

We have two choices for the shape: wide or long. The wide version of
this data would have months as the rows and states as the columns; it
would be a 248 by 51 table with the number of sigthings as entries. This
is a really natural way to shape the data if we were presenting a table
for example.

One of things I've picked up from my years of using R, though, is a
preference for long data. This is because R's `factors` and `formulas`
with easy conditioning make it easier to work with long data. The most
common example is using `lattice` plots. To generate a lattice plot of
`y` over `x` with panels defined by a level of the variable `f`, you
just call `xyplot(y ~ x | f)`. For this to work though, the data must be
long, with `f` a column of factors, and the `x` column will likely be
some values repeated for each level of `f`. This seems kind of redundant
and unwieldy when you're used to tables and spreadsheets, but it becomes
more natural when you starting working with tools like `lattice` or
`ggplot`, using more panel data, or doing more [*split-apply-combine*][]
or *map-reduce* types of procedures.

Because Pandas dataframes are so organized around indices, and because
Pandas allows for hierarchical indexing, we'll find that it will be a
good strategy to shape data in a way that provides for informative
indices. This will give us access to a host of powerful methods to
manipulate the dataframe. In this case, as we'll see, by making the data
long, we'll be able to push most of the information into the dataframe's
index.

The long version of our UFO data would have rows defined by a
state/month pair, and a column recording the number of sightings for
that pair. In R–as the authors do in the book–you'll have a dataframe
with three columns. The first two are the *factor* variables `USState`
and `YearMonth`. (I'm not actually sure these are technically factor
variables in the authors' implementation, but they are conceptually).
The third is the sightings count.

In Pandas, since the state and month pairs identify unique observations,
it's natural to make these indices of the dataframe. Pandas supports
hierarchical indexing by using unique tuples–here a tuple would be
*(state, month)*.

## Aggregating the data

Now that we've decided the form of the data, let's implement all this.

The first step is to create a year-month variable. I do this just by
taking the date of each sighting, and calculating a new date with the
same year and month, but set to the first of the month. This is just
another `map` operation.


    ufo_us['year_month'] = ufo_us['date_occurred'].map(lambda x:
    dt.date(x.year, x.month, 1))

> **Note**: The authors approach this problem a little differently,
> using R's `strftime` function to turn the dates into a string of the form
> `YYYY-MM`. I prefer to keep them numeric (it makes time series
>  plots more sensible), but either way works. My choice of the first
> day of the month is arbitrary, and just serves to collect the dates into
> groups.

Then we want to sum up the sightings by state and month. To do this,
I'll use Pandas `groupby` method. `groupby`, as you'd expect, works like
SQL's `GROUP BY` statement.

    :::python
    sightings_counts = ufo_us.groupby(['us_state',
    'year_month'])['year_month'].count()

You can almost read this statement as an `SQL` query:
`SELECT COUNT(year_month) GROUP BY us_state, year_month`.

The `groupby` method applied to the data frame results in a
`DataFrameGroupBy` object, which isn't much to look at but contains all
the information we need to perform calculations by groups of the
variables we passed to the method. Calling the `year_month` column
results in a similar `SeriesGroupBy` object. Finally, calling the
`count` method counts how many non-null observations of `year_month`
there are in each level. The final output is a Series of the counts with
a hierarchal index of the groupby variables.

To aggregate their data in R, the authors use the `ddply` function,
which provides similar groupby-type functionality. I find the `plyr`
functions less intuitive and expressive than Pandas' syntax. But, the
`plyr` functions are a big improvement over R's `apply` functions for
complicated calculations.

As the authors do on p. 22, let's check out the first few Alaska
sightings.

    :::python
    print 'First few AK sightings in data:'
    print sightings_counts.ix['ak'].head(6)

This spits out:

    First few AK sightings in data:
    year_month
    1990-01-01 1
    1990-03-01 1
    1990-05-01 1
    1993-11-01 1
    1994-02-01 1
    1994-11-01 1

Note that I have one more observation than the authors do–February 1994.
As discussed in [Part 2][], the authors' cleaning methodology is going
to cut any observations where the U.S. city part of the location data
has commas in it. My methodology won't lose those observations. That
seems to be what's happened here. Looking at that record with:


    print 'Extra AK sighting, no on p. 22:'
    print ufo_us[(ufo_us['us_state'] == 'ak') &
    (ufo_us['year_month'] == dt.date(1994, 2, 1))] \\
    [['year_month','location']]

shows that indeed, my extra observation has a comma in the city record:

    Extra AK sighting, no on p. 22:
    year_month location
    5508 1994-02-01 Savoonga,St. Lawrence Island, AK[/sourcecode]


## Indexing tricks

When we perform the `groupby` calculations, the resulting series is
missing rows where there were no UFO sightings in a state/month. This
makes sense of course – `groupby` goes through the data, finds all the
state/month combinations, and turns them into discrete levels within
which to perform calculations. If there are no sightings in a state in a
month, `groupby` won't know to turn that combination into a level.

So, basically, we want to add those levels back into the data and set
the associated sightings count to zero. There are two ways to do this in
Pandas. The first uses Pandas' `reindex` methods. I'll create a "full"
index with every combination of states and months:

    :::python
    ym_list = [dt.date(y, m, 1) for y in range(1990, 2011)
                for m in range(1, 13)
                if dt.date(y, m, 1) \<= dt.date(2010, 8, 1)]

    full_index = zip(np.sort(us_states \* len(ym_list)), ym_list \* len(us_states))
    full_index = MultiIndex.from_tuples(full_index, names =
    ['states', 'year_month'])[/sourcecode]

The first line is just a list comprehension that creates a list of all
the months in the data, from January 1990 to August 2010. The second
line creates 51&times;248 tuples of (state, month) pairs. (I created the list
of states, `us_states`, in [Part 2][].) The third line creates a Pandas
hierarchical index out of these tuples. Hierarchical indices in Pandas
can take names that label the levels of the index.

Next, I'll reindex the `sightings_counts` series with this full index.
Pandas will conform the dataset to the new index we give it, dropping
elements whose index level is not in the new index, and making elements
for new index levels not in the original. By default Pandas fills in
these new elements with `NA`, but we can tell it to fill these values
with zero, and end up with the series we're looking for.

    :::python
    sightings_counts = sightings_counts.reindex(full_index, fill_value = 0)


## Stacking and unstacking data

There's another way to get the full time series out of the groupby
calculations. Instead of creating the full index of state/month
combinations, I can use a trick using Pandas `stack` and `unstack`
methods. `stack` and `unstack` turn data from wide to long and vice
versa, similar to the `melt` and `cast` methods in R's `reshape2`
package.

The idea is to first widen (`unstack`) the data, so that we have states
as columns and months as rows. This will force the data to have the
248&times;51 entries we're looking for (assuming that there's a sighting in
at least one state every month between January 1990 and August 2010).
For the entries in this data frame where there are no
sightings–state/months not present in the long data–Pandas will fill in
`NA`. I'll tell Pandas to fill it with zero instead, and then `stack`
the data again to put it back in long form. Since there is now a number
(sometimes zero) for every state/month pair, this new long dataset will
have all the rows we need. Here's the code:

    :::python
    sightings_counts1 = ufo_us.groupby(['us_state', 'year_month'])['year_month'].count()

    sightings_counts1 = sightings_counts1.unstack(1).fillna(0).stack()

Let's check that we get the same dataset from both methods:

    :::python
    # Check they're the same shape and values.
    print 'Shape using handmade MultiIndex:', sightings_counts.shape
    print 'Shape using unstack/stack method:', sightings_counts1.shape
    print 'Sum absolute difference:', np.sum(np.abs(sightings_counts1 -
    sightings_counts))

I check the sum-of-absolute-differences between the series, instead of
 checking for strict equality, to give some leeway for floating point
error (even though these should be integers, there might be some type
conversion that happens through these methods). Either way, looks like
we have the same result from both methods:

    Shape using handmade MultiIndex: (12648,)
    Shape using unstack/stack method: (12648,)
    Sum absolute difference: 0.0

## Conclusion

I've got the data just how I want it to plot time series of UFO
sightings by state. There were actually very few lines of code in this
part. But those few lines of code were doing a lot of work, and
represented one of the toughest parts of working with data: getting it
in the right shape. It wasn't long ago that reshaping data was always
and everywhere a huge hassle. It still is in some languages (*\*cough\*
SAS \*cough\* Stata \*cough\**). The combination of hierarchical
indexing and `stack` and `unstack` methods in Pandas make doing this in
Python actually pleasant.

I'm finally going to wrap up Chapter 1 in the next part, in which I
create a plot to match the authors' trellis plot of sightings time
series by state. It's going to be a real Matplotlib adventure.

  [last part]: ../ml4h-ch1-p3.html
  [*split-apply-combine*]: http://vita.had.co.nz/papers/plyr.html
  [Part 2]: ../ml4h-ch1-p2.html
