Title: <i>Machine Learning for Hackers</i> Chapter 1, Part 2: Cleaning date and location data
Date: 2012-04-18 04:00
Author: Carl
Category: Will it Python
Tags: machine learning, python, R
Slug: ml4h-ch1-p2

## Introduction

In the [previous post][], I loaded the raw UFO data into a Pandas data
frame after cleaning up some irregularities in the text file. Since
we're ultimately concerned with analyzing UFO sightings over time and
space, the next step is to clean those variables and prepare them for
analysis and vizualization.

Some Python techniques to note in this part are:

-  Like in the last part, Python string methods are going to come in
    really handy, and be a simple, expressive solution to a lot of
    problems.
-  When those aren't enough, Python has a pretty straightforward set of
    functions for implementing regular expressions.
-  The `map()` method in Pandas can be used to "vectorize" functions
    along a Series (i.e. a data frame column) and is similar to R's
    `apply`. In general, using a NumPy `ufunc` (vectorized function) is
    preferable, but not all operations can be expressed in `ufunc`s.
    This is especially true for non-numeric operations, such as for
    strings or dates.

## Cleaning dates: mapping and subsetting.

The first two columns of the data are dates in `YYMMDDD` format, and
Pandas imported them as integers. R has a function, `as.Date` that will
operate on a vector of date strings, converting them to numeric dates.
In Python, the `strptime` function in the `datetime` module performs the
same function, but it not vectorized the way `as.Date` is. (Note that R
also has a `strptime` that converts date strings to POSIX class object).
Therefore, we have to use the `map` method.

    :::python
    def ymd_convert(x):
    '''
    Convert dates in the imported UFO data.
    Clean entries will look like YYYMMDD. If they're not clean, return NA.
    '''
    try:
    cnv_dt = dt.datetime.strptime(str(x), '%Y%m%d')
    except ValueError:
    cnv_dt = np.nan

    return cnv_dt

    ufo['date_occurred'] = ufo['date_occurred'].map(ymd_convert)
    ufo['date_reported'] =
    ufo['date_reported'].map(ymd_convert)

Notice that `map` here is like R's `apply` function (this is a little
confusing, since Python also has an `apply` method that is *not* like
R's). Since series--columns in Pandas data frames--are  just NumPy
`ndarrays` underneath, only NumPy `ufuncs` will operate on them in a
vectorized (fast, elementwise) fashion. Base Python functions, and any
more complicated functions you create from them, will have to be
explicitly mapped. This is a little different from R, where, since the
fundamental object in the language is the vector, functions are more
likely vectorized than not. Nonetheless, NumPy `ufuncs` do cover the
gamut of mathematical operations, and for other cases, the `map` method
is easy enough to implement.

Then we just get rid of the rows with one date or the other not in
proper `YYYMMDD` format.

    :::python
    # Get rid of the rows that couldn't be conformed to datetime.
    ufo = ufo[(notnull(ufo['date_reported'])) &
    (notnull(ufo['date_occurred']))]

The subsetting of the data frame is done by indexing it with a boolean
vector. Since the `df[ ]` operation returns rows, the

One can also subset an R data frame this way. R though, also has a
`subset` function, with the syntax:

    :::python
    ufo = ufo[!is.na(ufo[ , 'date.reported']) & !is.na(ufo[ , 'date.occurred']), ]

being equivalent to:

    :::R
    ufo = subset(ufo, where = !is.na(date_reported) & !is.na(date.occurred))

The general `subset` syntax is:
`df.new = subset(df.orig, where = condition, select = columns)`.
Since `subset` looks for the variables referenced in the `where` and
`select` arguments in the `df.orig` environment, there's no need to call
them as `df.orig[ , 'var']` or `df.orig$var`. There are other useful
commands that work like this: `with`, `within`, and `transform`, for
example.

I find the `subset` function in R more expressive and easier to read
than the boolean masking method, and I miss there being a Pandas
equivalent.


## Cleaning locations: string functions and regular expressions

Cleaning the date variables was relatively easy. Locations are trickier,
and the authors don't do a particularly thorough job of it. (No knock on
them, reading several pages of text cleaning would be deadly boring, and
they'te just illustrating some techniques). I'll suggest a slightly
better method that will pick up some extra data, but even that could
probably be improved if we were concerned about getting every bit of
information out of this dataset.

The authors assume that valid U.S. locations are going to be in "City,
ST" format (e.g., "Iowa City, IA"). Anything else is going to be dropped
as either an international record, or not worth cleaning.

They write a function that takes a location record and checks that it
fits this pattern by seeing if R's `strsplit` function splits it into
two elements at a comma. If so, the function returns a vector containing
the two elements, otherwise it returns a vector with two `NAs` (though
not quite, see the note below). They then use R's `lapply` to apply the
function elementwise, and collect the resulting vectors in a list. Then
there are some tricks to get the list into an `Nx2` matrix, and then put
each column of the matrix into a variable in the data frame as `USCity`
and `USState`.

> **Note**: the authors wrap `strsplit` in `tryCatch` assuming that the
> former will throw an error if there are no commas in the string. My
> testing shows that's not the case, and `strsplit` will just return the
> original string. The `tryCatch` wrapper doesn't have any effect, and
> that line of code doesn't appear to drop locations without commas as
> the authors intend. This isn't really a problem, since they later
> subset on records with valid U.S. states, and that ultimately drops
> the no-comma location records.

It's easy to write a similar function in Python, using the `split`
method of string objects.

    :::python
    def get_location(l):
    split_location = l.split(',')
    clean_location = [x.strip() for x in split_location]
    if len(split_location) != 2:
    clean_location = ['', '']
    return clean_location

This is near-direct translation of the authors' `get.location` function.
Note the `strip` method and the list comprehension replace the `gsub`
function the authors use to remove beginning and trailing white space
from the extracted city and states.

But a quick look at the data shows that there are lots of valid U.S.
locations that will get dropped with this method. Specifically, the city
part of the location contains commas in many records, so the split
methods will return more than two elements and we will drop them as
invalid. Let's check out some cases with the following code:

    :::python
    multi_commas = ufo['location'].map(lambda x : x.count(',') \> 1)
    print 'Number of entries w/ multiple commas', sum(multi_commas)
    print ufo['location'][multi_commas][:10][/sourcecode]

This returns:

    Number of entries w/ multiple commas 1055
    1473 Aquaduct (near, over desert, before entering California), CA
    1985 Redding (northeast of, out over Millville, approximately), CA
    2108 Farmington (SE of, deserted area, Hwy 44), NM
    2160 Stouthill (community, nearest city 30 miles, TN), TN
    2242 Highway 71 between Clearmont, Missouri and Maryville, Missou, MO
    2257 Bayfield (near, Lake Superior, south shore), WI
    2287 Unidentified object sig, (VIC, Australia),
    2297 Garfield, (VIC, Australia),
    2384 Northeast Cape AFS, St Lawrence Island,, AK
    2458 Flisa, Solør, Hedemark (Norway),[/sourcecode]

So there are over a thousand location records with more than one comma,
and out of the first ten, seven are valid U.S. locations.

To save these records, I'll try another method, using regular
expressions to search for locations that end with ", ST"-type patterns.
Since we're going to ultimately use `map` to check this pattern for
every row in the data, I'll *compile* the pattern first, which typically
speeds up repeated searches.

    :::python
    us_state_pattern = re.compile(', [A-Z][A-Z]\$', re.IGNORECASE)

Then, I'll create a function that takes a location record as input, and
applies the regex search to it.

    :::python
    def get_location2(l):
        strip_location = l.strip()
        us_state_search = us_state_pattern.search(strip_location)
        if us_state_search == None:
            clean_location = ['', '']
        else:
            us_city = strip_location[ :us_state_search.start()]
            us_state = strip_location[us_state_search.start() + 2: ]
            clean_location = [us_city, us_state]

    return clean_location[/sourcecode]

To follow this, note that if the regex pattern isn't found, then the
`search` method returns `None`, otherwise it returns a search object
with several useful attributes. One of them is `start`, which indicates
where in the string the pattern starts. To extract the city, we just
take all the characters in the string up to `start`. The state will
start 2 characters later (since we don't want the comma or space in
front). The function, like the previous one, finally returns a two
element list with either a city and a state, or two blanks for records
that didn't match the pattern.

I again use `map` to apply this function elementwise to the location
column:

    :::python
    location_lists = ufo['location'].map(get_location2)

This returns a series of two-element lists. I use list comprehensions to
extract the first and second elements out to individual lists, which I
assign to `us_city` and `us_state` variables in the data frame. It
sounds complicated, but in Python it's just two fairly readable lines of
code:

    :::python
    ufo['us_city'] = [city for city, st in location_lists]
    ufo['us_state'] = [st.lower() for city, st in location_lists]

The last step in cleaning the location data is to weed out any locations
that fit the "City, ST" pattern, but were not in U.S. states–Canadian
provinces for example. The authors do this in a straightforward way by
making a list of the 50 U.S. states and using R's `match` function to
see where the U.S. state variable matches a state in the list. They then
subset the data frame to records where there is a match.

> **Note**: The authors leave D.C. out of the list of states. It looks
> like there are about 90 records with D.C. in the state column.
> Unfortunately a couple of these aren't Washington, D.C., but are South
> American "Distrito Capitals." I'll add D.C. into the list and
> subsequent analyses, keeping in mind there are a few false positives.
> (This may be true for other states as well, like I said at the start,
> this cleaning isn't 100% accurate.)

NumPy has an equivalent to the `match` function, though the name is a
little more awkward: `in1d`. Below, I assign anything records in
`us_state` that doesn't have a match in the state list a blank string,
then drop them out of the data.

    :::python
    ufo['us_state'][-np.in1d(ufo['us_state'].tolist(), us_states)] = ''
    ufo['us_city'][-np.in1d(ufo['us_state'].tolist(), us_states)] = ''

    ufo_us = ufo[ufo['us_state'] != '']

The `to_list` is necessary because Pandas requires a list argument to
`[ ]`, and `in1d` returns a NumPy array.

And that's that. In the next post I'll start exploring the data
graphically.

[previous post]: ../ml4h-ch1-p1.html
