Title: Shades of Time: I don't buy it, and that's why it's so great.
Date: 2012-04-22 04:00
Author: Carl
Category: Data Visualization
Tags: python
Slug: shades-of-time

Over the weekend [Drew Conway][] posted about a data analysis project
he'd just completed called [*Shades of Time*][]. Very briefly, he took a
[dataset][] of Time magazine covers from 1923 to March 2012, then used
some Python libraries to identify the faces in the covers and identify
the skin tone of each face. The result is a really great
interactive [visualization][] implemented in [d3.js][].

From looking at this data, Drew, with some caveats, observes that "it
does appear that the variance in skin tones have [sic] changed over
time, and in fact the tones are getting darker." He also notes that
there are more faces on covers in later years.

## Why I don't believe it

There's no real statistical testing done here–no formal quantification
how skin-tone representation on covers is changing over time. Instead, I
think he's drawing his conclusion on the vizualization alone, especially
the scatterplot in the bottom panel that seems to show more darker tones
appearing later in the date (starting in the 70's, the skin-tone
dispersion in his data starts to increase).

He notes that there are difficulties in both identifying faces and skin
tones. After going through his analysis, I think these algorithms are
fragile enough, and the categorization of faces and skin tones is poor
enough, that I don't really buy his conclusion that cover face diversity
is increasing.

For example, I reviewed many of the data classified with a dark skin
tone that seemed to be contributing to the visual impression of
increasing diversity. A good number of them weren't faces at all, but
objects like guns, or parts of the word "TIME."

Many others were famous white guys. Here's a list I made from my cursory
review:

1.  James Taylor (1971)
2.  Archie Bunker/Carrol O'Connor (1973)
3.  Joni Mitchell (1974)
4.  Gerald Ford (1974, 1975)
5.  Francisco Franco (1975)
6.  Jimmy Carter (1976)
7.  Queen Elizabeth (1976)
8.  John Irving (1981)
9.  Ronald Reagan (1985)
10. Willem Defoe, Charlie Sheen (1987)
11. Ollie North (1987)
12. Dan Rather (1988)
13. Michael Eisner (1988)
14. Statue In Congress (1990)
15. Garth Brooks (1992)
16. Roger Keith Coleman (1992)
17. Serbian Detention Camp Prisoners (1992)
18. Michael Chrichton (1995)
19. Bill Clinton (I know he's the first black president, but I don't think that should count) (1998)
20. Monica Lewinsky (1998)
21. John Travolta (1998)
22. Slobodan Milosevic (1999)
23. Ted Kaczynski (1999)
24. John McCain (2000)
25. Jerry Levin (2000)
26. George Bush (2000)
27. Francis Collins (2000)
28. Yoda (2002)
29. Trent Lott (2002)
30. Joe Wilson (2003)
31. Brad Pitt (2004)
32. John Kerry (2004)
33. George Bush (2004)
34. Bono (2006)
35. Bill Gates (2006)
36. Jesus Christ (2006)
37. John McCain (2006)
38. Rick Warren (2008)
39. Sarah Palin (2008)
40. Lloyd Blankfein (2009)
41. Tom Hanks (2010)
42. Jonathan Franzen (2010)
43. George Washington (2010)

Now, no classification algorithm is perfect, and these covers are
complicated, heterogeneous inputs. But just from eyeballing it, this one
seems so inaccurate on this data, that I don't trust that the observed
dispersion is the result of more correctly classified darker faces on
covers.


## Why it's still awesome

While I don't think the classification process here is accurate enough
to let us draw inferences about skin tone diversity, the fact that I
could come to this conclusion after 30 minutes of poking around on a web
site really says some interesting things about the process and
presentation of the project.

For one, I think it's a fantastic use of dynamic visualization. I don't
think any aesthetic aspect of it is novel or noteworthy, instead I think
it's innovative on a more meta level. Often times we think for
visualizations as serving one of two processes. The first is pre-model:
exploration of raw data to suggest questions, patterns, or models. The
second is post-model: presentation of results or model diagnostics.

I've been skeptical of d3 and similar frameworks, because I've rarely
seen dynamic or interactive graphs that do a much better job at these
two types of tasks than static graphs. At least not so much better as to
justify the added costs of producing them and delivering them to an
audience. Also, a lot of what I've seen that's been represented as cool
stuff you can do with d3–or Processing, or whatever–is mostly pretty
junk; stuff like busy stream graphs and chord graphs and other things
I'd put in the high-effort/low-reward quadrant of Kaiser Fung's
[return-on-effort matrix][].

The visualization for *Shades of Time*, though, is impressive to me
because it's not really exploring raw data, or presenting
results–instead it's illustrating the *process* of analyzing the data.
To get the list above, I started from the time series chart at the
bottom that seemed to show increasing diversity. Then I noted the points
in that chart that I felt were most influencing that conclusion. I could
then find them in the scrolling chart on the left, click, see on the
right panel what raw data (what image on what cover) generated that
point, and determine whether the classifier was giving a meaningful
result.

After going through it long enough, I decided there really wasn't enough
meaningful output coming from the classifier for me to comfortably
believe Drew's observation. Nonetheless, I think it's incredibly novel
and useful to have a visualization that lets me so easily do a
mini-replication of the analysis. This one lets you walk through the
major steps, from raw data (the covers in the right panel) to
quantification/classification (the skin tone tiles in the left panel) to
aggregation and interpretation (the time series scatter plot on the
bottom).

It really makes me rethink some of the possibilities of interactive
graphics. This isn't just a [stream graph of box office receipts][] or
the [Baby Name Wizard][], which are mostly just raw data explorers. I
think it suggests a whole different application and conceptual framework
for interactive graphics. That is, how do we illustrate to an audience
the *process* by which we went from raw data to conclusions, and let
them follow along and investigate that process?

[Drew Conway]: http://drewconway.com/zia
[*Shades of Time*]: http://www.drewconway.com/zia/?p=2874
[dataset]: http://www.reddit.com/r/datasets/comments/s0fld/all_time_magazine_covers_march_1923_to_march_2012/
[visualization]: http://labs.drewconway.com/time/
[d3.js]: http://mbostock.github.com/d3/
[return-on-effort matrix]: http://statisticsforum.wordpress.com/2011/07/31/one-difference-between-statistical-graphics-and-infoviz-is-the-return-on-effort/
[stream graph of box office receipts]: http://www.nytimes.com/interactive/2008/02/23/movies/20080223_REVENUE_GRAPHIC.html
[Baby Name Wizard]: http://www.babynamewizard.com/
