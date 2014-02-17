Title: Will it  Python?
Author: Carl Vogel
Slug: will-it-python

## What is it?

<img id="willitpython-logo" src="../images/will-it-python.png" width=300px style="float:left; margin:0 .5em 0 0;"/>

*Will it Python?* posts are my attempts to port data analyses
originally done in R into Python.

The objective isn't to just make a key that translates functions and
methods in R into Python equivalents. Instead, the goal is to reproduce
the results and insights of the analysis in idiomatic Python (to the
extent I'm qualified to judge such a thing). Sometimes there will be a
direct translation from a line of R to a line of Python; other times
Python will suggest an altogether different approach to the problem.

## What's the point?

The first goal of *Will it Python?* is entirely selfish--I just want to
learn how to better use the Python data analysis stack (NumPy, SciPy,
Matplotlib, Pandas, etc.).

Second, though, I hope these posts can also be a useful resource  for
others who are interested the Python data analysis toolkit and its
viability as an alternative to R. That includes analysts who have been
working in R and are "py-curious," but aren't 100% sure they can get
their work done in Python. It also includes developers in the Python
data analysis stack, who are still evolving their tools. By taking cases
studies that are known-solvable in R and translating them to Python, we
get a better of idea where the Python toolkit shines, and where it still
falls short in features or usability.

## What are the projects?

My first *Will it Python?* project is translating *[Machine Learning for
Hackers][] *by [Drew Conway][] and [John Myles White][]. The book has a
great collection of case studies that showcase R doing what it does very
well: getting users close to their data quickly, and running cutting
edge statistical techniques via high-level libraries. The authors also
strike a good balance in datasets they work with: they recognize that
real world data are messy, but they don't use datasets so complex that
the tedium of cleaning and munging overwhelms the fun stuff.

I'll also pull examples from textbooks and other sources with R analyses
as they strike my interest. For example, Gelman and Hill's [*Data
Analysis Using Regression and Multilevel/Hierarchical Models*][]has a
lot of great examples of running statistical models in R.

## What else?

You can see all the *Will it Python?* posts [here][], or by clicking in the category label of any *Will it Python?* post.

All the code written for *Will it Python?* posts lives at the Github
repo [here][1].

The dumb name and logo were shamelessly appropriated from
Blendtec's *[Will it Blend?][]* ad campaign.

This is a learning experience for me, and my Python is amateurish at
best. I appreciate any and all comments letting me know when I'm doing
something dumb.

I'm also up for taking requests if folks have R projects in mind that
they'd like to see attempted in Python.

## Viewing IPython notebooks online

Most of the projects are coded in IPython notebooks. As I finish them,
I'll post links to them via [nbviewer][], so they can be read online.
Note that a couple of the earlier entries were coded more with .py
scripts in mind, so don't take good advantage of the notebook features
(like markdown, Latex, etc.)

### Machine Learning for Hackers

-   [Chapter 2][]
-   [Chapter 2 ][2](updated with formulas)
-   [Chapter 3][]
-   [Chapter 3][3](using NLTK)
-   [Chapter 4][]
-   [Chapter 5][]
-   [Chapter 6][]
-   [Chapter 7][]
-   [Chapter 8][]
-   [Chapter 9][]

### Data Analysis Using Regression and Multilevel/Hierarchical Models (ARM)

-   [Chapter 5][4]

[Machine Learning for Hackers]: http://shop.oreilly.com/product/0636920018483.do
[Drew Conway]: http://www.drewconway.com
[John Myles White]: http://www.johnmyleswhite.com/
[*Data Analysis Using Regression and Multilevel/Hierarchical Models*]: http://www.stat.columbia.edu/~gelman/arm/
[here]: http://www.slendermeans.org/category/will-it-python.html
[1]: https://github.com/carljv/Will_it_Python
[Will it Blend?]: http://www.willitblend.com "Will it Blend?"
[nbviewer]: http://http://nbviewer.ipython.org
[Chapter 2]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/CH2/ch2.ipynb
[2]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/CH2/ch2_with_formulas.ipynb
[Chapter 3]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/CH3/ch3.ipynb
[3]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/CH3/ch3_nltk.ipynb
[Chapter 4]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch4/ch4.ipynb
[Chapter 5]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch5/ch5.ipynb
[Chapter 6]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch6/ch6.ipynb
[Chapter 7]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch7/ch7.ipynb
[Chapter 8]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch8/ch8.ipynb
[Chapter 9]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch9/ch9.ipynb
[4]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/ARM/ch5/arsenic_wells_switching.ipynb

