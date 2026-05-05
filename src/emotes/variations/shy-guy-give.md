---
layout: layout.njk
title: "Shy Guy Give Color Variations"
permalink: /emotes/variations/shy-guy-give/
variation_group: "shy-guy-give"
---

Pick your favorite color Shy Guy Give to show off in chat!

<div class="grid">
  {% for emote in collections.emotes %}
    {% if emote.data.variation_group == variation_group %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>
