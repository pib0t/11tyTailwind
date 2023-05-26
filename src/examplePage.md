---
layout: 'layouts/home.webc'
title: 'Example'
meta:
  desc:
    'Example Page'
intro:
  title: 'Example Page'
---

### Fetch
{% include "./_data/getImage.js" %}
<!--<script src="fetch.js"></script>-->
![APOD]({{getImage}})
