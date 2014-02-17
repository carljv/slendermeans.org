Title: <i>Machine Learning for Hackers</i> Chapter 5: Linear regression (with categorical regressors)
Date: 2012-12-28 01:32
Author: Carl
Category: Will it Python
Tags: machine learning, python, R
Slug: ml4h-ch5

## Introduction

Chapter 5 of *Machine Learning for Hackers* is a relatively simple
exercise in running linear regressions. Therefore, this post will be
short, and I'll only discuss the more interesting regression example,
which nicely shows how patsy formulas handle categorical variables.

## Linear regression with categorical independent variables

In chapter 5, the authors construct several linear regressions, the last
of which is a multi-variate regression descriping the number of page
views of top-viewed web sites. The regression is pretty straightforward,
but includes two categorical variables: `HasAdvertising`, which takes
values `True` or `False`; and `InEnglish`, which takes values `Yes`,
`No` and `NA` (missing).

If we include these variables in the formula, then patsy/statmodels will
automatically generate the necessary dummy variables. For
`HasAdvertising`, we get a dummy variable equal to one when the the
value is `True`. For `InEnglish`, which takes three values, we get two
separate dummy variables, one for `Yes`, one for `No`, with the missing
value serving as the baseline.

    :::python
    model = 'np.log(PageViews) ~ np.log(UniqueVisitors) + HasAdvertising +
    InEnglish'
    pageview_fit_multi = ols(model, top_1k_sites).fit()
    print pageview_fit_multi.summary()


Results in:

    OLS Regression Results

    ==============================================================================
    Dep. Variable: np.log(PageViews) R-squared: 0.480
    Model: OLS Adj. R-squared: 0.478
    Method: Least Squares F-statistic: 229.4
    Date: Sat, 24 Nov 2012 Prob (F-statistic): 1.52e-139
    Time: 09:50:25 Log-Likelihood: -1481.1
    No. Observations: 1000 AIC: 2972.
    Df Residuals: 995 BIC: 2997.
    Df Model: 4

    ==========================================================================================
    coef std err t P\>|t| [95.0% Conf. Int.]

    ------------------------------------------------------------------------------------------
    Intercept -1.9450 1.148 -1.695 0.090 -4.197 0.307
    HasAdvertising[T.True] 0.3060 0.092 3.336 0.001 0.126 0.486
    InEnglish[T.No] 0.8347 0.209 4.001 0.000 0.425 1.244
    InEnglish[T.Yes] -0.1691 0.204 -0.828 0.408 -0.570 0.232
    np.log(UniqueVisitors) 1.2651 0.071 17.936 0.000 1.127 1.403

    ==============================================================================
    Omnibus: 73.424 Durbin-Watson: 2.068
    Prob(Omnibus): 0.000 Jarque-Bera (JB): 92.632
    Skew: 0.646 Prob(JB): 7.68e-21
    Kurtosis: 3.744 Cond. No. 570.

    ==============================================================================

If we were going to do this without the formula API, we'd have to
explicity make these dummies. For comparison, here's that.

    :::python
    top_1k_sites['LogUniqueVisitors'] =
    np.log(top_1k_sites['UniqueVisitors'])
    top_1k_sites['HasAdvertisingYes'] =
    np.where(top_1k_sites['HasAdvertising'] == 'Yes', 1, 0)
    top_1k_sites['InEnglishYes'] = np.where(top_1k_sites['InEnglish']
    == 'Yes', 1, 0)
    top_1k_sites['InEnglishNo'] = np.where(top_1k_sites['InEnglish'] == 'No', 1, 0)

    linreg_fit = sm.OLS(np.log(top_1k_sites['PageViews']),
    sm.add_constant(top_1k_sites[['HasAdvertisingYes',
    'LogUniqueVisitors',
    'InEnglishNo', 'InEnglishYes']],
    prepend = True)).fit()
    linreg_fit.summary()
