import { htmlElements } from "./script/htmlElements.js";
import { addBackToShowsLink } from "./script/eventListener.js";
import { fetchShows } from "./script/api.js";
import { renderShows } from "./script/render.js";
import { selectedShow, searchContent } from "./script/eventListener.js";

async function setup() {
  try {
    // Fetch shows
    const allShows = await fetchShows();

    // Ensure shows are successfully fetched
    if (!allShows || allShows.length === 0) {
      console.error("No shows found!");
      return;
    }

    htmlElements(allShows);
    searchContent(allShows, renderShows, "Search shows...");
    renderShows(allShows);
    selectedShow(allShows);
    addBackToShowsLink(allShows, renderShows);
  } catch (error) {
    // Log error and show a user-friendly message
    console.error("Error setting up the app:", error);
    alert("Failed to load shows. Please try again later.");
  }
}

window.onload = setup;
