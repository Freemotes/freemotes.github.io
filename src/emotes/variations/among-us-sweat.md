---
layout: layout.njk
title: "Among Us Sweat Color Variations"
permalink: /emotes/variations/among-us-sweat/
variation_group: "among-us-sweat"
---

Pick your favorite color Among Us Sweat to show off in chat!

<div class="grid">
  {% for emote in collections.emotes %}
    {% if emote.data.variation_group == variation_group %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>
