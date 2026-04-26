---
layout: layout.njk
title: "Mega Man Smile Color Variations"
permalink: /emotes/variations/mega-man-smile/
variation_group: "mega-man-smile"
---

Pick your favorite color Mega Man Smile to show off in chat!

<div class="grid">
  {% for emote in collections.emotes %}
    {% if emote.data.variation_group == variation_group %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>
