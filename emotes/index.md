---
layout: layout.njk
title: "Emotes"
date: 2010-03-10
tags: ["emotes"]
---

<div class="grid">
  {% assign sortedEmotes = collections.emotes | sort: "date" | reverse %}

  {% for emote in sortedEmotes %}
    {% if emote.inputPath != "./src/emotes/index.md" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>