Title: <i>Machine Learning for Hackers</i> Chapter 1, Part 1: Loading data
Date: 2012-04-14 04:00
Author: Carl
Category: Will it Python
Tags: machine learning, python, R
Slug: ml4h-ch1-p1

## Preface

This is my first *Will it Python?* post. These posts document
my experiences trying to port complete and interesting R projects to
Python. I'm beginning by going through the recently published [*Machine
Learning for Hackers*][] (MLFH) by [Drew Conway][] and [John Miles
White][].

More information on the posts is [here][], and archives are [here][1].

## Introduction

The first chapter of MLFH is a gentle introduction to loading,
manipulating and graphing data in R. To keep the tutorial interesting,
the authors have found a fun dataset of [UFO sightings][] to work
through.

Since this chapter is mainly devoted to loading and manipulating data, a
lot of the R functionality they exploit is going to have an analog in
[Pandas][]. Even though there's not too much exciting going on in this
chapter, it's a great way to explore how basic data tasks get done in
Python. It turns out there are some interesting differences between how
R and Python handle even this simple stuff.

In this first post, I'll focus on just getting the data into the work
environment. The complete code for the chapter is located in a Github
repo, [here][2].

## Data with inconsistent column lengths: break or compensate?

The raw data is contained in a tab-separated file and the authors use
R's `read.delim()` function to read it into an R dataframe. The data seem
to load smoothly, and there are no errors or warnings. There are no
headers in the data, so the authors set the `headers` argument
of `read.delim()` to `FALSE` and name the columns of dataframe after
it's loaded.

The same procedure in Python uses the `read_table()` function in Pandas:

    :::python
    ufo = read_table('data/ufo/ufo_awesome.tsv', sep = '\t',
    na_values = '', header = None)

This, though, will raise an exception, complaining that there are the
"wrong number of columns." R loaded the data without complaint, so
what's going on?

It turns out that `read_table()` is right to complain. Let's use
Python's basic file IO to read each line of the file, and separate the
line into columns by splitting it at tab characters. We'd expect each
line to have six columns. As soon as we hit a line that doesn't, I'll
break the line-reading loop, and print out the line number and the
columns it was split into. This will tell us where the first (if any)
bad line is in the file, and give a look at what's wrong with it.

    :::python
    inpath = 'data/ufo/ufo_awesome.tsv'
    inf = open(inpath, 'r')

    for i, line in enumerate(inf):
        splitline = line.split('\\t')
        if len(splitline) != 6:
            first_bad_line = splitline
            print "First bad row:", i
            for j, col in enumerate(first_bad_line):
                print j, col
            break

    inf.close()

This code prints the following output:

    First bad row: 754
    0 19950704
    1 19950706
    2 Orlando, FL
    3
    4 4-5 min
    5 I would like to report three yellow oval lights which passed over
    Orlando,Florida on July 4, 1995 at aproximately 21:30 (9:30 pm). These
    were the sizeof Venus (which they passed close by). Two of them traveled
    one after the otherat exactly the same speed and path heading
    south-southeast. The third oneappeared about a minute later following
    the same path as the other two. Thewhole sighting lasted about 4-5
    minutes. There were 4 other witnesses oldenough to report the sighting.
    My 4 year old and 5 year old children were theones who called my
    attention to the &quot;moving stars&quot;. These objects moved
    fasterthan an airplane and did not resemble an aircraft, and were moving
    much slowerthan a shooting star. As for them being fireworks, their path
    was too regularand coordinated. If anybody else saw this phenomenon,
    please contact me at:
    6 ler@gnv.ifas.ufl.edu

So we see that in row 754 of the file, we came across a line with seven
columns (six tabs). The sixth column of the data is a "long" description
of the UFO sighting, and here it looks like there was a tab character
within the long description, creating extraneous columns.

Why didn't R have a problem with this line? We can see what happened if
we look on page 15 of the MLFH. There the authors show rows of the data
where the first column–the date of the sigthing–doesn't match a date
format. The first instance of a bad observation in the first column of
the R data is `ler@gnv.ifas.ufl.edu`, which we just saw is actually the
first instance of a spurious seventh column. Apparently, `read.delim()`
is inferring the number of columns from the first few rows, then pushing
any extra columns to a new row.

I think I much prefer the Pandas behavior here to R's. Even though R
actually did get the data loaded with no fuss, it ended up mangling it
pretty badly. Given the size of the dataset, the rarity of these bad
rows, and the authors' cleaning process, it may not have mattered much
at the end of the analysis. But that's not going to be true in every
case – and here, R isn't even throwing a warning to indicate that
something might be fishy with the raw data.

Note though, that if the authors had used `read.delim()` with a
`col.names` argument, then R would have raised an error when it came
across a row with more columns than were indicated by the supplied list
of column names.

This is a pretty boring problem, but an important one. To sum up:

> **Lesson 1**: R's `read.delim()` without either `header = TRUE` or a
> `col.names` argument is dangerous. If you have to load the data to
> figure out what the column names should be, try loading it again with
> the column names you've assigned.

## Preparing the raw data to load into a data frame.

Now that we've discovered irregularities in the raw data that are
preventing it from fitting neatly into a data frame, we have to fix
them.

There are two options, both involve processing the file line-by-line.
First, we can take the data in the columns after the sixth and append
them to the end of the data in the sixth column. The sixth column is a
long text discription of the event, and the extra columns are likely to
be continuations of that description. But, we don't actually end up
caring about the long description in our analysis, so I'll take a second
approach and just delete those extra columns.

The procedure is encapsulated in the function below. It reads lines from
the original file, `inpath`, cleans them, and writes the result to
`outpath`. Note that this function doesn't actually return anything;
it's just a side-effect on the `outpath` file.

    :::python
    def ufotab_to_sixcols(inpath, outpath):
    '''
    Keep only the first 6 columns of data from messy UFO TSV file.

    The UFO data set is only supposed to have six columns. But...

    The sixth column is a long written description of the UFO sighting, and
    sometimes is broken by tab characters which create extra columns.

    For these records, we only keep the first six columns. This typically
    cuts off some of the long description.

    Sometimes a line has less than six columns. These are not written to
    the output file (i.e., they're dropped from the data). These records
    are usually so comprimised as to be uncleanable anyway.

    This function has (is) a side effect on the outpath file, to which it
    writes output.
    '''

    inf = open(inpath, 'r')
    outf = open(outpath, 'w')

    for line in inf:
    splitline = line.split('\t')
    # Skip short lines, which are dirty beyond repair, anyway.
    if len(splitline) < 6:
    continue

    newline = ('\t').join(splitline[ :6])
    # Records that have been truncated won't end in a newline character
    # so add one.
    if newline[-1: ] != '\n':
    newline += '\n'

    outf.write(newline)

    inf.close()
    outf.close()

This function performs the following steps:

1.  Open the input file for reading and the output file for writing.
2.  Read a line from the original file.
3.  Split the line into columns at the tab characters using the
    `split()` method.
4.  If line is split into less than six columns, ignore this line and go
    read the next one.
5.  Otherwise rejoin the first six columns of the split line back
    together with tab characters using the `join()` method. This results
    in `newline`.
6.  If there's not a line break character at the end of `newline` (which
    will happen if we've cut off the ending column because it was past
    the sixth column), then add one on.
7.  Write `newline` to the output file.
8.  Repeat 2-7 with the next line of the input file.

Note that step 4 means that short lines with less than six columns (5
tabs) don't get written to the cleaned file. I haven't investigated in
depth why some rows are too short and whether there's a way to fix those
rows instead of tossing them out, but it's unlikely the fix would be
simple or reliable.

I run the function to create a cleaned-up tab-separated file called
`ufo_awesome_6col.tsv`. (The path to the input file, `inpath`, was
already defined).

    :::python
    outpath = 'data/ufo/ufo_awesome_6col.tsv'
    ufotab_to_sixcols(inpath, outpath)


## Trying `read_table()` again.

Now I'll try using Pandas and `read_table()` again to load the file into
a data frame. (Since I know what the column names are supposed to be,
I'll just pass them to the function instead of adding them later.)

    :::python
    ufo = read_table('data/ufo/ufo_awesome_6col.tsv', sep = '\\t',
                      na_values = '',  header = None,
                      names = ['date_occurred', 'date_reported',
                               'location', 'short_desc', 'duration',
                               'long_desc'])

And this now runs without a hitch. We'll use the `head()` and
`to_string()` methods of a Pandas data frame to compare the first six
rows of the data to what's shown in the table on p. 14 of MLFH.

    :::python
    ufo.head(6).to_string(formatters =
                           {'long_desc' : lambda x : x[ :21]})

The dictionary in the `formatters` argument tells `to_string()` to only
print the first 21 characters in the long description. The result is the
following table:

       date_occurred  date_reported              location  short_desc duration                long_desc
    0       19951009       19951009         Iowa City, IA         NaN      NaN    Man repts. witnessing
    1       19951010       19951011         Milwaukee, WI         NaN    2 min.     Man on Hwy 43 SW of
    2       19950101       19950103           Shelton, WA         NaN      NaN     Telephoned Report:CA
    3       19950510       19950510          Columbia, MO         NaN    2 min.   Man repts. son&apos;s
    4       19950611       19950614           Seattle, WA         NaN      NaN    Anonymous caller rept
    5       19951025       19951024  Brunswick County, ND         NaN   30 min.   Sheriff&apos;s office

And this matches the authors' table on p. 14. So we're off to a good
start. In the next post we'll clean this data up some more and do some
munging to get at the information we're interested in.

  [*Machine Learning for Hackers*]: http://shop.oreilly.com/product/0636920018483.do
  [Drew Conway]: http://www.drewconway.com
  [John Miles White]: http://johnmyleswhite.com
  [here]: ../pages/will-it-python.html
  [1]: ../category/will-it-python.html
  [UFO sightings]: https://github.com/johnmyleswhite/ML_for_Hackers/tree/master/01-Introduction/data/ufo
  [Pandas]: http://pandas.pydata.org/
  [2]: https://github.com/carljv/Will_it_Python/tree/master/MLFH/CH1
