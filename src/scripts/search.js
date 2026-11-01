
document.addEventListener("DOMContentLoaded", async () => {
  const searchWraps = document.querySelectorAll(".searchWrap");

  if (!searchWraps.length) {
    console.warn("No search bars found.");
    return;
  }

  let allTags = [];

  // Load tags from search.json
  try {
    const response = await fetch("/search.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    const tagSet = new Set();

    data.forEach(item => {
      if (Array.isArray(item.tags)) {
        item.tags.forEach(tag => {
          const clean = String(tag).trim().toLowerCase();
          if (clean) tagSet.add(clean);
        });
      }
    });

    allTags = Array.from(tagSet).sort();

    console.log("Search tags loaded:", allTags.length);
  } catch (err) {
    console.error("Failed to load search tags:", err);
  }

  // Initialize every search bar
  searchWraps.forEach(searchWrap => {
    const input = searchWrap.querySelector(".searchInput");
    const button = searchWrap.querySelector(".searchButton");
    const suggestionsBox = searchWrap.querySelector(".suggestions");

    if (!input || !button || !suggestionsBox) {
      console.warn("Incomplete search bar:", searchWrap);
      return;
    }

    function performSearch() {
      const query = input.value.trim();

      if (query) {
        window.location.href = `/search/?q=${encodeURIComponent(query)}`;
      }
    }

    function clearSuggestions() {
      suggestionsBox.innerHTML = "";
      suggestionsBox.style.display = "none";
    }

    function showSuggestions(matches) {
      suggestionsBox.innerHTML = "";

      if (!matches.length) {
        suggestionsBox.style.display = "none";
        return;
      }

      matches.forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag;

        li.addEventListener("click", () => {
          input.value = tag;
          clearSuggestions();
          input.focus();
        });

        suggestionsBox.appendChild(li);
      });

      suggestionsBox.style.display = "block";
    }

    button.addEventListener("click", performSearch);

    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        performSearch();
      }
    });

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();

      if (!query) {
        clearSuggestions();
        return;
      }

      const startsWith = [];
      const contains = [];

      for (const tag of allTags) {
        if (tag.startsWith(query)) {
          startsWith.push(tag);
        } else if (tag.includes(query)) {
          contains.push(tag);
        }

        if (startsWith.length + contains.length >= 5) break;
      }

      showSuggestions([...startsWith, ...contains].slice(0, 5));
    });

    document.addEventListener("click", event => {
      if (!searchWrap.contains(event.target)) {
        clearSuggestions();
      }
    });
  });
});

// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("nav-open");

    toggle.setAttribute("aria-expanded", isOpen);
    toggle.innerHTML = isOpen ? "✕ Close" : "☰ Menu";
  });

  // Close menu after selecting a navigation link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = "☰ Menu";
    });
  });
});