import { htmlElements } from "./ui/dom.js";

import { addBackToShowsLink } from "./ui//events/navigation-handler.js";
import { fetchShows } from "./ui/api.js";
import { renderShows } from "./ui/components/show-renderer.js";
import { searchContent } from "./ui/events/search-handler.js";
import { selectedShow } from "./ui/events/show-selector-handler.js";

let cachedShows = null; // Cache for shows data

async function setup() {
  try {
    // Use cached data if available
    if (!cachedShows) {
      cachedShows = await fetchShows();
    }

    // Ensure shows are successfully fetched
    if (!cachedShows || cachedShows.length === 0) {
      console.error("No shows found!");
      return;
    }

    htmlElements(cachedShows);
    searchContent(cachedShows, renderShows, "Search shows...");
    renderShows(cachedShows);
    selectedShow(cachedShows);
    addBackToShowsLink(cachedShows, renderShows);
  } catch (error) {
    console.error("Error setting up the app:", error);
    alert("Failed to load shows. Please try again later.");
  }
}

// Listen for page show events (when page is restored from bfcache)
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    // Page was restored from bfcache
    setup();
  }
});

window.onload = setup;

// Optional: Clear cache when page is hidden/unloaded
window.addEventListener("pagehide", () => {
  // Optionally clear cache if data freshness is important
  // cachedShows = null;
});
