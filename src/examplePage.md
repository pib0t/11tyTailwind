---
layout: 'layouts/home.webc'
title: 'Example'
---
 ## Hello!
 
  <p>Let's try out some elements, layouts and styles.</p>

  <!--{% if isAdmin %}
    <p>Welcome, administrator!</p>
  {% else %}
    <p>Welcome, guest!</p>
  {% endif %} -->

  <ul>
    {% for item in navigation.items %}
      <li>{{ item.text }}</li>
    {% endfor %}
  </ul>
{% endblock %}
