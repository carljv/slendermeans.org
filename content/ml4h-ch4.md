Title: <i>Machine Learning for Hackers</i> Chapter 4: Priority e-mail ranking
Date: 2012-12-28
Category: Will it Python
Tags: machine learning, python, R
Slug: ml4h-ch4
Author: Carl

## Introduction
I'm not going to write much about this chapter. In my opinion the payoff-to-effort ratio for this project is pretty low. The algorithm for ranking e-mails is pretty straightforward, but in my opinion seriously flawed. Most of the code in the chapter (and there's a lot of it) revolves around parsing the text in the files. It's a good exercise in thinking through feature extraction, but it's not got a lot of new ML concepts. And from my perspective, there's not much opportunity to show off any Python goodness. But, I'll hit a couple of points that are new and interesting.

The complete code is at the Github repo [here](https://github.com/carljv/Will_it_Python/tree/master/MLFH/ch4), and you can read the notebook via nbviewer [here](http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch4/ch4.ipynb).

**1. Vectorized string methods in pandas.** Back in [Chapter 1](../ml4h-ch1-p2.html), I groused about lacking vectorized functions for operations on strings or dates in pandas. If it wasn't a numpy ufunc, you had to use the pandas `map()` method. That's changed a lot over the summer, and since pandas 0.9.0, we can call [vectorized string methods](http://pandas.pydata.org/pandas-docs/stable/basics.html#vectorized-string-methods).

For example, here's the code in my chapter for program that identifies e-mails that are part of a thread, by looking for "re:"-like prefixes on the subjects.

    :::python
    reply_pattern   = '(re:|re\[\d\]:)'
    fwd_pattern = '(fw:|fw[\d]:)'

    def thread_flag(s):
        '''
        Returns True if string s matches the thread patterns.
        If s is a pandas Series, returns a Series of booleans.
        '''
        if isinstance(s, basestring):
            return re.search(reply_pattern, s) is not None
        else:
            return s.str.contains(reply_pattern, re.I)

    def clean_subject(s):
        '''
        Removes all the reply and forward labeling from a
        string (an e-mail subject) s.
        If s is a pandas Series, returns a Series of cleaned
        strings.
        This will help find the initial message in the thread
        (which won't have any of the reply/forward labeling.
        '''
        if isinstance(s, basestring):
            s_clean = re.sub(reply_pattern, '', s, re.I)
            s_clean = re.sub(fwd_pattern, '', s_clean, re.I)
            s_clean = s_clean.strip()
        else:
            s_clean = s.str.replace(reply_pattern, '', re.I)
            s_clean = s_clean.str.replace(fwd_pattern, '', re.I)
            s_clean = s_clean.str.strip()

        return s_clean

In `thread_flag`, if the input is a pandas series of e-mail subject lines, then the function will use a vectorized string function, called with `.str.contains()` to see if a pattern matching a reply-type prefix is in the subject. The function will therefore return a pandas series of booleans, that are `True` for all the subjects that have a reply pattern, and `False` for all the subjects that don't.

The function `clean_subjects`, if given a pandas Series input, will use the vectorized string methods `.str.replace()` and `.str.strip()` to clean the re- and fwd-like patterns out of the subjects.

Notice there are some differences between the naming of pandas string methods and the base string methods or `re` module functions that perform similar operations on single strings. For example, there's no `contains` function in `re`; we use `re.search()`. Similarly `.str.replace()` does what we'd use `re.sub()` to do on a single string.

**2. More term-document matrices** In [Chapter 3](../ml4h-ch3.html) we built a term-document matrix to extract term-frequency features from a set of e-mails. This chapter has a similar exercise, applied to both e-mail messages and their subjects. In the code for that chapter, I built a TDM function that wrapped the term-document matrix function in the `textmining` package, adding some options that tried to mimic the `tdm` function in R's `tm` package. I use that same function, `tdm_df`, here. In the post for that chapter, I lamented that I couldn't find a decent term-document matrix function for Python. The one in `textmining` was too barebones and I was surprised there was nothing that fit the bill in NLTK.

In comments to that post, Vishal Goklani pointed me to the [`CountVectorizer`](http://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html#sklearn.feature_extraction.text.CountVectorizer) function in scikits-learn (in the `sklearn.feature_extraction.text` module). Despite the rather generic name, this will give you a TDM from a set of documents, returned in the form of a sparse matrix. Here's quick-and-dirty wrapper function that returns a TDM in the form of a pandas DataFrame.

    :::python
    def sklearn_tdm_df(docs, **kwargs):
        '''
        Create a term-document matrix (TDM) in the form of a pandas DataFrame
        Uses sklearn's CountVectorizer function.

        Parameters
        ----------
        docs: a sequence of documents (files, filenames, or the content) to be
            included in the TDM. See the `input` argument to CountVectorizer.
        **kwargs: keyword arguments for CountVectorizer options.

        Returns
        -------
        tdm_df: A pandas DataFrame with the term-document matrix. Columns are terms,
            rows are documents.
        '''
        # Initialize the vectorizer and get term counts in each document.
        vectorizer = CountVectorizer(**kwargs)
        word_counts = vectorizer.fit_transform(docs)

        # .vocabulary_ is a Dict whose keys are the terms in the documents,
        # and whose entries are the columns in the matrix returned by fit_transform()
        vocab = vectorizer.vocabulary_

        # Make a dictionary of Series for each term; convert to DataFrame
        count_dict = {w: Series(word_counts.getcol(vocab[w]).data) for w in vocab}
        tdm_df = DataFrame(count_dict).fillna(0)
        return tdm_df

    # Call the function on e-mail messages. The token_pattern is set so that terms are only
    # words with two or more letters (no numbers or punctuation)
    message_tdm = sklearn_tdm_df(train_df['message'],
                                 stop_words = 'english',
                                 charset_error = 'ignore',
                                 token_pattern = '[a-zA-Z]{2,}')


**3. Timezone issues and rank instability.** In the book, the authors compute stats measuring how active threads are. This depends on the time-stamps of the messages, which the authors parse out of the e-mail files. They ignore the time-zone information in the time-stamps, and this seems to create some bugs. For example, the following thread has two e-mails:

    Name: [sadev] [bug 840] spam_level_char option change/removal
        734    2002-09-06 10:56:23-07:00
        763    2002-09-06 13:56:19-04:00

If you ignore the timezones, it looks like 763 comes three hours after 734. But looking at the timezones, you can see that 734 actually comes *four seconds after* 763. So this is a far more active thread than the code in the book calculates.

This sort of issue has a pretty big effect on the ranks of the messages. The rank is just the product of 5 feature weights (based on sender info., thread activity, and term features). Even though the authors scale the individual feature weights (typically with log-scales), by calculating the final rank as a product, you can get big rank difference based on what might seem to be practically similar features (even without any bugs)--for example, in some cases it doesn't take a big difference to double a feature's weight, which then doubles the e-mail's rank.So it seems to me the ranking procedure in the book is not very stable. This is fine, since it's just meant to be illustrative, but of course you want to be aware of this issue for a more serious exercise.

## Conclusion
I didn't go into much detail here. If you're interested in seeing a lot of Python and pandas text parsing in action, definitely check out the [code](http://nbviewer.ipython.org/urls/raw.github.com/carljv/Will_it_Python/master/MLFH/ch4/ch4.ipynb).
