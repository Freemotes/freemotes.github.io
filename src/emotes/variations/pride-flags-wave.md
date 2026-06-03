---
layout: layout.njk
title: "Pride Flag Wave Color Variations"
permalink: /emotes/variations/pride-flag-wave/
variation_group: "pride-flag-wave"
---

Let your true colors show with these wave emotes!

<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "rainbowflag" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "progressivepride" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "straigthally" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Agender</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "agender" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Aromantic</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "aromantic" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Asexual</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "asexual" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Bigender</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "bigender" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Bisexual</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "bisexual" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Demisexual</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "demisexual" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Gay</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "gay" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Genderfluid</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "genderfluid" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Genderqueer</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "genderqueer" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Intersex</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "intersex" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Lesbian</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "lesbian" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Non-binary</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "nonbinary" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Omnisexual</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "omnisexual" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Pansexual</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "pansexual" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Polyamorous</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "polyamory" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Polysexual</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "polysexual" %}
      <a class="card" href="{{ emote.url }}">
        <img src="{{ emote.data.image }}" alt="{{ emote.data.title }}" width="112" height="112">
      </a>
    {% endif %}
  {% endfor %}
</div>

<h2>Trans</h2>
<div class="grid">
  {% for emote in collections.emotes %}
    {% assign tags = emote.data.tags %}

    {% if emote.data.variation_group == variation_group and tags contains "transflag" %}
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