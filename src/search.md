---
layout: layout.njk
title: Search Results
permalink: /search/
---

<div id="results"></div>

<script>
async function loadSearch() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q")?.toLowerCase() || "";

  const res = await fetch("/search.json");
  const data = await res.json();

  const results = data.filter(item => {
    return (
      item.title.toLowerCase().includes(query) ||
      (item.tags && item.tags.join(" ").toLowerCase().includes(query)) ||
      (item.description && item.description.toLowerCase().includes(query))
    );
  });

  const container = document.getElementById("results");

  if (results.length === 0) {
    container.innerHTML = "<p>No results found</p>";
    return;
  }

  container.innerHTML = `
    <div class="grid">
      ${results.map(item => `
        <a class="card" href="${item.url}">
          <img src="${item.image}" alt="${item.title}" width="112" height="112">
        </a>
      `).join("")}
    </div>
  `;
}

loadSearch();
</script>