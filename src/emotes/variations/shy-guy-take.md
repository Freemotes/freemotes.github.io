---
layout: layout.njk
title: "Shy Guy Take Color Variations"
permalink: /emotes/variations/shy-guy-take/
variation_group: "shy-guy-take"
---

Pick your favorite color Shy Guy Take to show off in chat!

<div class="grid">
  {% for emote in collections.emotes %}
    {% if emote.data.variation_group == variation_group %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>
