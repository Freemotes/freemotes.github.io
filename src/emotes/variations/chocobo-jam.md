---
layout: layout.njk
title: "Chocobo Jam Color Variations"
permalink: /emotes/variations/chocobo-jam/
variation_group: "chocobo-jam"
---

Pick your favorite color Chocobo Jam to show off in chat!

<div class="grid">
  {% for emote in collections.emotes %}
    {% if emote.data.variation_group == variation_group %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>
