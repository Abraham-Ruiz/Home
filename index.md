---
title: Home
---

Hi — I'm Your Name. This site contains short writeups and project links.

- [Projects](/projects/)
- [Blog](/)
- [About](/about/)

Recent posts
--------------
{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}
