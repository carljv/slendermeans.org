Title: <i>Machine Learning for Hackers</i> Chapter 3: Naive Bayes Text Classification
Date: 2012-12-20 04:20
Author: Carl
Category: Will it Python
Tags: machine learning, python, R
Slug: ml4h-ch3

I realize I haven't blogged about the rest of chapter 2 yet. I'll get
back to that, but chapter 3 is on my mind today. If you haven't seen
them yet, IPython notebooks up to chapter 9 are all up in the [Github
repo][]. To view them online, you can check the links on [this page][].

Chapter 3 is about text classification. The authors build a classifier
that will identify whether an e-mail is spam or not ("ham") based on the
content of the e-mail's message. I won't go into much detail on how the
Naive Bayes classifier they use works (beyond what's evident in the
code). The theory is described well in the book and many other places.
I'm just going to discuss implementation, assuming you know how the
classifier works in theory. The Python code for this project relies
heavily on the NLTK (Natural Language Toolkit) package, which is a
comprehensive library that includes functions for doing NLP and text
analysis, as well as an array of benchmark text corpora to use them on.
If you want to go deep into this stuff, two good resources are:

-   [*Natural Language Processing with Python*][] by S. Bird, E. Klein,
    and E. Loper; and
-   [*Python Text Processing with NLTK 2.0 Cookbook*][] by J. Perkins

## Two versions of the program

I've coded up two different versions of this chapter. The first,
[here][], tries to follow the book relatively closely. The general
procedure they use is:

1.  Parse and tokenize the e-mails
2.  Create a term-document matrix of the e-mails
3.  Calculate features of the training e-mails using the term-document
    matrix
4.  Train the classifier on these features
5.  Test the classifier on other sets of spam and ham e-mails

I'm not going to discuss this version in much detail, but you should
take a look at the notebook if you're interested. Two big takeaways from
this are:

- Python lacks a good term-document matrix tool.** I was surprised to find that NLTK, which has so much functionality including helper functions like `FreqDist`, doesn't have a function for making term-document matrices similar to the `tdm` function in R's `tm` package. There is a Python module called `textmining` (which you can install with pip) that does have a term-document matrix function, but it's pretty rudimentary. What you'll see in this chapter is that I've coded up a term-document matrix function that uses the one in `textmining` but adds some bells and whistles, and returns the TDM as a
(typically sparse) pandas dataframe.

- The authors' classifier suffers from numerical errors.** The Naive
Bayes classifier calcalates the probability that a message is spam by
calculating the probability that the message's terms occur in a spam
message. So if the message is just "buy viagra", and "buy" occurs in 75%
of the training spam, and "viagra" occurs in 50% of the training spam,
then the classifier assigns this a 'spam' probability of .75 \* .50 =
37.5%. The problem with this calculation is that there are typically
many terms, and the probabilities are often small, so their product can
end up smaller than machine precision and underflow to zero. The way
around this is to take the sum of the log probabilities (so log(.75) +
log(.25)). The authors don't do this, though, and it's apparent that
they end up with underflow errors. See, for example, the code output on
page 89. This is also what leads to them having essentially the same
error rates for "hard" ham as they do for "easy" ham in the tables on
pages 89 and 92. Once you fix this problem, it turns out the classifier
is actually much better for spam and easy ham than it appears in the
book, but it's way worse for hard ham.

I'm going to focus on the second version of the program, though, in the
notebook called `ch3_nltk.ipynb`. You can view it online [here][1].In
this version, I use NLTK's built-in `NaiveBayesClassifier` function, and
avoid creating the TDM (which isn't really used for much in the original
code anyway).

## Building a Naive Bayes spam classifier with NLTK

I'll follow the same logic as the program from chapter 3, but I'll do so
with a workflow more suited to NLTK's functions. So instead of creating
a term-document matrix, and building my own Naive Bayes classifier, Ill
build a `features → label` association for each training e-mail, and
feed a list of these to NLTK's `NaiveBayesClassifier` function.

### Extracting word features from the e-mail messages

The program begins with some simple code that loads the e-mail files
from the directories, extracts the "message" or body of the e-mail, and
loads all those messages into a list. This follows the book's code
pretty closely, and we end up with training and testing lists of spam,
easy ham, and hard ham. The training data will be the e-mails in the
training directories for spam and easy ham. (So, like in the book, we're
not training on any hard ham.)

Each e-mail in our classifier's training data will have a label ("spam"
or "ham") and a feature set. For this application, we're just going to
use a feature set that is just a set of the unique words in the e-mail.
Below, I'll turn this into a dictionary to feed into the
`NaiveBayesClassifier`, but first, let's get the set.

> **Note:** This is a similar to a "bag-of-words" model, in that it
> doesn't care about word order or other semantic information. But a
> "bag-of-words" usually considers the frequency of the word within the
> document (like a histogram of the words), whereas we're only concerned
> with whether it's in an e-mail, not how often it occurs.*

### Parsing and tokenizing the e-mails

I'm going to use NLTK's `wordpunct_tokenize` function to break the
message into tokens. This splits tokens at white space and (most)
punctuation marks, and returns the punctuation along with the tokens on
each side. So `"I don't know. Do you?"` becomes
`["I", "don","'", "t", "know", ".", "Do", "you", "?"]`.

If you look through some of the training e-mails in
`train_spam_messages` and `train_ham_messages`, you'll notice a few
features that make extracting words tricky.

First, there are a couple of odd text artefacts. The string '3D' shows
up in strange places in HTML attributes and other places, and we'll
remove these. Furthermore there seem to be some mid-word line wraps
flagged with an '=' where the word is broken across lines. For example,
the word 'apple' might be split across lines like 'app=\\nle'. We want
to strip these out so we can recover 'apple'. We'll want to deal with
all these first, before we apply the tokenizer.

Second, there's a lot of HTML in the messages. We'll have to decide
first whether we want to keep HTML info in our set of words. If we do,
and we apply `wordpunct_tokenize` to some HTML, for example:

    "<HEAD></HEAD><BODY><!-- Comment -->"

would tokenize to:

    ["<", "HEAD", "></", "HEAD", "><", "BODY", "><!--", "Comment", "-->"]

So if we drop the punctuation tokens, and get the unique set of what
remains, we'd have `{"HEAD", "BODY", "Comment"}`, which seems like what
we'd want. For example, it's nice that this method doesn't make,
`<HEAD>` and `</HEAD>` separate words in our set, but just captures the
existence of this tag with the term `"HEAD"`. It might be a problem that
we won't distinguish between the HTML tag `<HEAD>` and "head" used as an
English word in the message. But for the moment I'm willing to bet that
sort of conflation won't have a big effect on the classifier.

If we don't want to count HTML information in our set of words, we can
set `strip_html` to `True`, and we'll take all the HTML tags out before
tokenizing.

Lastly we'll strip out any "stopwords" from the set. Stopwords are
highly common, therefore low information words, like "a", "the", "he",
etc. Below I'll use `stopwords`, downloaded from NLTK's corpus library,
with a minor modifications to deal with this. (In other programs I've
used the stopwords exported from R's `tm` package.)

Note that because our tokenizer splits contractions ("she'll" → "she",
"ll"), we'd like to drop the ends ("ll"). Some of these may be picked up
in NLTK's `stopwords` list, others we'll manually add. It's an
imperfect, but easy solution. There are more sophisticated ways of
dealing with this which are overkill for our purposes.

Tokenizing, as perhaps you can tell, is a non-trivial operation. NLTK
has a host of other tokenizing functions of varying sophistication, and
even lets you define your own tokenizing rule using regex.

    :::python
    def get_msg_words(msg, stopwords = [], strip_html = False):
    '''
    Returns the set of unique words contained in an e-mail message.
    Excludes
    any that are in an optionally-provided list.

    NLTK's 'wordpunct' tokenizer is used, and this will break contractions.
    For example, don't -&gt; (don, ', t). Therefore, it's advisable to
    supply
    a stopwords list that includes contraction parts, like 'don' and 't'.
    '''

    # Strip out weird '3D' artefacts.
    msg = re.sub('3D', '', msg)

    # Strip out html tags and attributes and html character codes,
    # like '&amp;nbsp;'  and '&amp;lt;'.
    if strip_html:
    msg = re.sub('&lt;(.|\\n)\*?&gt;', ' ', msg)
    msg = re.sub('&amp;\\w+;', ' ', msg)

    # wordpunct_tokenize doesn't split on underscores. We don't
    # want to strip them, since the token first_name may be informative
    # moreso than 'first' and 'name' apart. But there are tokens with
    long
    # underscore strings (e.g. 'name_'). We'll just
    replace the
    # multiple underscores with a single one, since 'name_' is
    probably
    # not distinct from 'name_' or 'name_' in identifying spam.
    msg = re.sub('_+', '_', msg)

    # Note, remove '=' symbols before tokenizing, since these
    # sometimes occur within words to indicate, e.g., line-wrapping.
    msg_words = set(wordpunct_tokenize(msg.replace('=\\n', '').lower()))

    # Get rid of stopwords
    msg_words = msg_words.difference(stopwords)

    # Get rid of punctuation tokens, numbers, and single letters.
    msg_words = [w for w in msg_words if re.search('[a-zA-Z]', w) and
    len(w) &gt; 1]

    return msg_words

### Making a `(features, label)` list

The `NaiveBayesClassifier` function trains on data that's of the form
`[(features1, label1), features2, label2), ..., (featuresN, labelN)]`
where `featuresi` is a dictionary of features for e-mail `i` and
`labeli` is the label for e-mail `i` (`spam` or `ham`).

The function `features_from_messages` iterates through the messages
creating this list, but calls an outside function to create the features
for each e-mail. This makes the function modular in case we decide to
try out some other method of extracting features from the e-mails
besides the set of word. It then combines the features to the e-mail's
label in a tuple and adds the tuple to the list.

The `word_indicator` function calls `get_msg_words()` to get an e-mail's
words as a set, then creates a dictionary with entries `{word: True}`
for each word in the set. This is a little counter-intuitive (since we
don't have `{word: False}` entries for words not in the set) but
`NaiveBayesClassifier` knows how to handle it.

    :::python
    def features_from_messages(messages, label, feature_extractor, **kwargs):
         '''
        Make a (features, label) tuple for each message in a list of a certain,
        label of e-mails ('spam', 'ham') and return a list of these tuples.

        Note every e-mail in 'messages' should have the same label.
        '''
        features_labels = []
        for msg in messages:
        features = feature_extractor(msg, **kwargs)
        features_labels.append((features, label))
        return features_labels

        def word_indicator(msg, **kwargs):
        '''
        Create a dictionary of entries {word: True} for every unique
        word in a message.

        Note **kwargs are options to the word-set creator,
        get_msg_words().
        '''
        features = defaultdict(list)
        msg_words = get_msg_words(msg, **kwargs)
        for w in msg_words:
        features[w] = True
        return features

## Training and evaluating the classifier

With those functions defined, we can apply them to the training and
testing spam and ham messages.

    :::python
    def make_train_test_sets(feature_extractor, **kwargs):
        '''
        Make (feature, label) lists for each of the training
        and testing lists.
        '''
        train_spam = features_from_messages(train_spam_messages, 'spam',
        feature_extractor, **kwargs)
        train_ham = features_from_messages(train_easyham_messages, 'ham',
        feature_extractor, **kwargs)
        train_set = train_spam + train_ham

        test_spam = features_from_messages(test_spam_messages, 'spam',
        feature_extractor, **kwargs)

        test_ham = features_from_messages(test_easyham_messages, 'ham',
        feature_extractor, **kwargs)

        test_hardham = features_from_messages(test_hardham_messages,
        'ham',
        feature_extractor, **kwargs)

        return train_set, test_spam, test_ham, test_hardham

Notice that the training set we'll use to train the classifier combines
both the spam and easy ham training sets (since we need both types of
e-mail to train it).

Finally, let's write a function to train the classifier and check how
accurate it is on the test data.

    :::python
    def check_classifier(feature_extractor, **kwargs):
        '''
        Train the classifier on the training spam and ham, then check its
        accuracy
        on the test data, and show the classifier's most informative features.
        '''

        # Make training and testing sets of (features, label) data
        train_set, test_spam, test_ham, test_hardham = \\
        make_train_test_sets(feature_extractor, **kwargs)

        # Train the classifier on the training set
        classifier = NaiveBayesClassifier.train(train_set)

        # How accurate is the classifier on the test sets?
        print ('Test Spam accuracy: {0:.2f}%'
        .format(100 \* nltk.classify.accuracy(classifier, test_spam)))
        print ('Test Ham accuracy: {0:.2f}%'
        .format(100 \* nltk.classify.accuracy(classifier, test_ham)))
        print ('Test Hard Ham accuracy: {0:.2f}%'
        .format(100 \* nltk.classify.accuracy(classifier, test_hardham)))

        # Show the top 20 informative features
        print classifier.show_most_informative_features(20)

The function also prints out the results of `NaiveBayesClassifiers`'s
handy `show_most_informative_features` method. This shows which features
are most unique to one label or another. For example, if "viagra" shows
up in 500 of the spam e-mails, but only 2 of the "ham" e-mails in the
training set, then the method will show that "viagra" is one of the most
informative features with a `spam:ham` ratio of 250:1.

So how do we do? I'll check two versions. The first uses the HTML info
in the e-mails in the classifier:

    :::python
    check_classifier(word_indicator, stopwords = sw)

Which gives:

    Test Spam accuracy: 98.71%
    Test Ham accuracy: 97.07%
    Test Hard Ham accuracy: 13.71%
    Most Informative Features
        align = True          spam : ham = 119.7 : 1.0
        tr = True             spam : ham = 115.7 : 1.0
        td = True             spam : ham = 111.7 : 1.0
        arial = True          spam : ham = 107.7 : 1.0
        cellpadding = True    spam : ham = 97.0 : 1.0
        cellspacing = True    spam : ham = 94.3 : 1.0
        img = True            spam : ham = 80.3 : 1.0
        bgcolor = True        spam : ham = 67.4 : 1.0
        href = True           spam : ham = 67.0 : 1.0
        sans = True           spam : ham = 62.3 : 1.0
        colspan = True        spam : ham = 61.0 : 1.0
        font = True           spam : ham = 61.0 : 1.0
        valign = True         spam : ham = 60.3 : 1.0
        br = True             spam : ham = 59.6 : 1.0
        verdana = True        spam : ham = 57.7 : 1.0
        nbsp = True           spam : ham = 57.4 : 1.0
        color = True          spam : ham = 54.4 : 1.0
        ff0000 = True         spam : ham = 53.0 : 1.0
        ffffff = True         spam : ham = 50.6 : 1.0
        border = True         spam : ham = 49.6 : 1.0

The classifier does a really good job for spam and easy ham, but it's
pretty miserable for hard ham. This may be because hard ham messages
tend to be HTML-formatted while easy ham messages aren't. Note how much
the classifier relies on HTML information--nearly all the most
informative features are HTML-related.

If we try just using the text of the messages, without the HTML
information, we lose a tiny bit of accuracy in identifying spam but do
much better with the hard ham.

    :::python
    check_classifier(word_indicator, stopwords = sw, strip_html = True)

shows

    Test Spam accuracy: 96.64%
    Test Ham accuracy: 98.64%
    Test Hard Ham accuracy: 56.05%
    Most Informative Features
        dear = True          spam : ham = 41.7 : 1.0
        aug = True           ham : spam = 38.3 : 1.0
        guaranteed = True    spam : ham = 35.0 : 1.0
        assistance = True    spam : ham = 29.7 : 1.0
        groups = True        ham : spam = 27.9 : 1.0
        mailings = True      spam : ham = 25.0 : 1.0
        sincerely = True     spam : ham = 23.0 : 1.0
        fill = True          spam : ham = 23.0 : 1.0
        mortgage = True      spam : ham = 21.7 : 1.0
        sir = True           spam : ham = 21.0 : 1.0
        sponsor = True       ham : spam = 20.3 : 1.0
        article = True       ham : spam = 20.3 : 1.0
        assist = True        spam : ham = 19.0 : 1.0
        income = True        spam : ham = 18.6 : 1.0
        tue = True           ham : spam = 18.3 : 1.0
        mails = True         spam : ham = 18.3 : 1.0
        iso = True           spam : ham = 17.7 : 1.0
        admin = True         ham : spam = 17.7 : 1.0
        monday = True        ham : spam = 17.7 : 1.0
        earn = True          spam : ham = 17.0 : 1.0

Check out the most informative features; they make a lot of sense. Note
mostly spammers address you with "Dear" and "Sir" and sign off with
"Sincerely,". (Probably those Nigerian princes; they tend to be polite.)
Other spam flags that gel with our intuition are "guaranteed",
"mortgage", "assist", "assistance", and "income."

## Conclusion

So we've built a simple but decent spam classifier with just a tiny
amount of code. NLTK provides a wealth of tools for doing this sort of
thing more seriously including ways to extract more sophisticated
features and more complex classifiers.

  [Github repo]: https://github.com/carljv/Will_it_Python/tree/master/MLFH
  [this page]: ../category/will-it-python.html
  [*Natural Language Processing with Python*]: http://shop.oreilly.com/product/9780596516499.do
  [*Python Text Processing with NLTK 2.0 Cookbook*]: http://www.packtpub.com/python-text-processing-nltk-20-cookbook/book
  [here]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/CH3/ch3.ipynb
  [1]: http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/CH3/ch3_nltk.ipynb
