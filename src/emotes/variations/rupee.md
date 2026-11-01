---
layout: layout.njk
title: "Rupee Color Variations"
permalink: /emotes/variations/rupee/
variation_group: "rupee"
---

Pick your favorite color Rupee to show off in chat!

<div class="grid">
  {% for emote in collections.emotes %}
    {% if emote.data.variation_group == variation_group %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>
