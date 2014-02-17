Title: A Geneva Convention for the Language Wars
Date: 2014-01-17 14:30
Author: Carl
Category: Programming
Tags: programming
Slug: language-wars

I don't tend to get too sniffy about the quality of discourse on the
Internet. I have some appreciation for even the most pointless, uninformed
flamewars. (And maybe my take on Web site comments is for another post.) But
there's an increasingly popular topic of articles and blog posts which is starting to annoy
me a little. You've likely read them--they have titles like: "Python is Eating R's Lunch," "Why
Python is Going to Take Over Data Science," "Why Python is a Pain in the Ass and
Will Never Beat R," "Why Everyone Will Live on the Moon and Code in Julia in 5
Years," etc.

This style of article obviously isn't unique to data analysis
languages. It's a classic nerd flamewar, in the proud tradition of text editor wars
and browser wars. Perhaps an added inflammatory agent here is the Data Science hype
machine.

And that's all okay. Go on the Internet and bitch about languages you don't like, or tell
everyone why your preferred one is awesome. That's what
[the Internet's here for][hacker-news]. And Lord knows I've done it myself.

My only problem is that it distracts from more important, more
interesting conversations about what's happening with data analysis
languages. Instead of pissing matches and popularity contests, the real
interesting phenomena is how developers are comparing notes, sharing cool
innovations, and increasing interoperability. A great example is the IPython
notebook. The notebook doesn't make Python better than other languages--it makes
[all][ijulia] [languages][ihaskell] [better][iruby].

I think it's a really fascinating time for folks who use and think about
computer languages. The last 5 years or so has seen not only the introduction of
really cool new languages, but also extraordinary developments in existing
ones. I'm psyched about all these languages and I want them all to succeed and
get better. Some days I want to code in R, some days in Python. Others in Julia,
or Clojure, or F#, or even C+<span style="margin-left:-4px">+</span>. I don't want any of them to stagnate or
disappear, or be "beaten" by any of the others. And I don't think that's
happening anyway.

So what's below is a somewhat tongue-in-cheek list of suggestions for
facilitating productive and interesting discussions comparing languages. Many of them are not specific
to our little R/Python/Matlab/Julia skirmishes, but apply to lots of different
language wars (C+<span style="margin-left:-4px">+</span> vs. Java, Python vs. Perl, Ruby vs. Python, Clojure vs. Scala, Haskell vs.,
I dunno, everybody?) The last section is comprised of a couple of very general
notes about civility. I'm strongly in favor everyone's right to be a smug prick
on the Internet. But, you know, you should probably try not to be a smug prick
on the Internet.

And, please, feel free to add additions or suggestions in the comments, or in this [Gist][gist]

## Section 1: Being Aware of Context ##

### § 1, Article 1 ###
Recognize that languages have goals and communities. It helps to evaluate them in
that context. Features that are high priority to you may not be high priority to
the majority of users in that language, and vice-versa.

### § 1, Article 2 ###
Recognize that many smart, capable people are very productive in the language
you're slagging. The cool things science and industry are making in the language
speaks far louder than your casual dismissals of it on a message board.

The same logic goes for language developers. For example,
[Hadley Wickham][hadley] is a smart guy and a great programmer; he's probably not one to
waste his time improving a language that's some irreparably broken
dead-end. Same with [these guys][contio].

### § 1, Article 3 ###
Recognize that language design is the art of the tradeoff. Don't complain about
a design choice until you understand the logic behind it. In many cases, your
preferred design or feature was already considered, and would have led to
undesirable outcomes elsewhere. It is helpful and
interesting to disagree about how a tradeoff was managed, but do recognize that there
was one.

### § 1, Article 4 ###
Distinguish between a feature request and a language critique. If you come to a
new language and miss some features of
your old language, that's fine. But that's not necessarily a failing of the new
language.

A living, breathing language is a combination of both its features and its idioms. A
feature may not exist because its programmers tend to write code in a way that
obviates its need. Sometimes such idioms are crutches to compensate for truly
useful features that are missing; other times they are interesting and elegant expressions of a
problem that you're just not accustomed to. Try to spot the difference.

### § 1, Article 5 ###
Pay your dues before dismissing a language. If you gave up on something in a language after finding it too difficult,
consider that the problem may be yours. It may not be, but at least
consider it.

### § 1, Article 6 ###
Don't over-sell immature, alpha-version features, no matter how
promising they are. Promises don't cook rice. Sending unsuspecting users to
buggy, incomplete libraries just harms your cause in the long run.

Examples:

  - "Julia has a fast-growing library of packages!" Sure, but less than a handful
    are close to production quality.
  - "And now ggplot has been ported to Python!" [Not quite yet.][ggplot-python]

Honest advertising of works-in-progress is encouraged, though. There's nothing
inherently wrong with immature libraries, many of which are fantastic.

### § 1, Article 7 ###
Microbenchmarks are useful for understanding differences between languages and their
execution, but are
of limited use in pissing contests. No one knows exactly what percentage of the world's
working software is comprised of Fibonacci number calculations, but our best
guess is not much. 

## Section 2: Being Interesting ##

### § 2, Article 1 ###

Whether one language is going to take over another is not that
interesting, nor that meaningful. (When does a language get "taken over?" For
Christ's sakes, there's still a non-trivial amount of COBOL running out there in the wild.)

Competition is pointless, but comparison is not. Languages are  increasingly adopting ideas from
each other, building interops with each other, and sharing
tooling. Having conversations about this process is far more interesting than
running popularity contests.

### § 2, Article 2 ###
Avoid clichéd arguments. They are not necessarily incaccurate, but
they are boring.

Examples:

- R is a "DSL" or "not a real language" (see Article 2 below); R is "designed by statisticians,
  not computer scientists."
- "Semantic whitespace in Python sucks." (Generally, arguments over
  syntax are boring.)
- "Julia doesn't have as many libraries as ${pretty much anything}."

In addition to arguments, also avoid clichéd phrases. (See, *e.g.*, "not ready
for prime-time.")


### § 2, Article 3 ###
Supplement abstract terms or subjective impressions with concrete definitions
and examples.

Examples of statements that could use concrete support:

  1. "Code in language X is *more expressive* than language Y."
  2. "R is a *DSL*, while Python is a *general purpose language.*"

## Section 3: Being Civil ##

### § 4, Article 1 ###
Be sure that you can accurately summarize someone's argument before you start
composing your rebuttal.

### § 4, Article 2 ###
You are not so smart that you are entitled to be smug. Some tips:

   1. Nix hyperbolic vocabulary. No one and nothing associated with any language
      is "stupid," "dumb," "crazy", "broken," etc.
   2. Use of the word "fail" is strongly discouraged. Use of it as a noun is
      strictly prohibited.
   3. It is no victory--not even a moral one--to find someone
      [wrong on the internet][xkcd-wrong]. Don't treat it a such. Offer a polite
      factual correction and allow for the possibility that you've misunderstood.


[hacker-news]: http://news.ycombinator.com "Hacker News"
[ijulia]: http://nbviewer.ipython.org/url/beowulf.csail.mit.edu/18.337/fractals.ipynb "IJulia notebook"
[iruby]: http://nbviewer.ipython.org/github/minad/iruby/blob/master/IRuby-Example.ipynb "IRuby notebook"
[ihaskell]: http://gibiansky.github.io/IHaskell/demo.html "IHaskell Notebook"
[gist]: https://gist.github.com/carljv/8554723 "Gist"
[hadley]: http://had.co.nz "Hadley Wickham"
[contio]: http://continuum.io "Continuum"
[ggplot-python]: http://blog.yhathq.com/posts/ggplot-for-python.html "ggplot for Python"
[xkcd-wrong]: http://xkcd.com/386/ "XKCD"
