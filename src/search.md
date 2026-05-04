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

  // ✅ TAG-ONLY partial match
  const results = data.filter(item =>
    Array.isArray(item.tags) &&
    item.tags.some(tag =>
      String(tag).toLowerCase().includes(lowerQuery)
    )
  );

  if (results.length === 0) {
    container.innerHTML = `<p>No results found for "${query}"</p>`;
    return;
  }

  container.innerHTML = `
    <div class="grid">
      ${results.map(item => `
        <a class="card" href="${item.url}">
          <img src="${item.image}" alt="${item.title}" width="112" height="112" loading="lazy">
        </a>
      `).join("")}
    </div>
  `;
}

loadSearch();
</script>