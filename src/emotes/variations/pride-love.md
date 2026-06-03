---
layout: layout.njk
title: "Pride Love Color Variations"
permalink: /emotes/variations/pride-love/
variation_group: "pride-love"
---

Pick your favorite color Pride Love to show off in chat!

<div class="grid">
  {% for emote in collections.emotes %}
    {% if emote.data.variation_group == variation_group %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<style>
/* background color */
body {
  background-color: #704070;
}
</style>