---
layout: layout.njk
title: Search Results
permalink: /search/
---

<div id="results"></div>

<script>
async function loadSearch() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";
  const lowerQuery = query.trim().toLowerCase();

  const titleEl = document.querySelector("h1");
  if (query && titleEl) {
    titleEl.textContent = `Search Results for "${query}"`;
  }

  const container = document.getElementById("results");

  if (!lowerQuery) {
    container.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  const res = await fetch("/search.json");
  const data = await res.json();

  // TAG-only partial match
  let results = data.filter(item =>
    Array.isArray(item.tags) &&
    item.tags.some(tag =>
      String(tag).toLowerCase().includes(lowerQuery)
    )
  );

  // Sort by newest first
  results.sort((a, b) => new Date(b.date) - new Date(a.date));

  let html = "";

  if (results.length === 0) {
    html += `<p>No results found for "${query}"</p>`;
  } else {
    html += `
      <div class="grid">
        ${results.map(item => `
          <a class="card" href="${item.url}">
            <img src="${item.image}" alt="${item.title}" width="112" height="112" loading="lazy">
          </a>
        `).join("")}
      </div>
    `;
  }

  // Special Zelda badge section
  if (lowerQuery === "zelda") {
    html += `
      <div class="zelda-badges">
        <h1>Badges</h1>
        <p>Click the image below for a special set of badges related to The Legend of Zelda to use for bits, subscribers or whatever else you have in mind.</p>
        <a href="/info/Badges-zelda.zip" download>
          <img src="/info/badges-zelda-all.png" alt="The Legend of Zelda badge collection">
        </a>
      </div>
    `;
  }

  container.innerHTML = html;
}

loadSearch();
</script>
