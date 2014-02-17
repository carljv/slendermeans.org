#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Carl Vogel'
SITENAME = u'Slender Means'
SITEURL = u'http://slendermeans.org'

TIMEZONE = u'America/New_York'

DEFAULT_LANG = u'en'

DEFAULT_DATE_FORMAT = '%B %d, %Y'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS =  (('Pelican', 'http://getpelican.com/'),
          ('Python.org', 'http://python.org/'),
          ('Jinja2', 'http://jinja.pocoo.org/'),
          ('Cool place', 'http://www.google.com'),
          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10
SUMMARY_MAX_LENGTH = 200
# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

# Theme
THEME = 'themes'
DISPLAY_CATEGORIES_ON_MENU = True
USE_FOLDER_AS_CATEGORY = False
DEFAULT_CATEGORY = 'Misc'
TYPOGRIFY = True
STATIC_PATHS = ['files', 'images', 'scripts']

# Analytics
GOOGLE_ANALYTICS = 'UA-43554300-1'

# Disqus
DISQUS_SITENAME = 'slendermeans'
