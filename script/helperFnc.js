import { renderShows, renderEpisodes } from "./render.js";
import { fetchShows, fetchEpisodes } from "./api.js";

export const filterAndRender = (
  searchTerm,
  items,
  renderFunction,
  resultCount
) => {
  const filteredItems = items.filter((item) => {
    if (!searchTerm) return true;

    const itemName = item.name.toLowerCase();
    // const itemSummary = item.summary ? item.summary.toLowerCase() : "";
    const itemSummary = item.summary.toLowerCase();
    const search = searchTerm.toLowerCase().trim();

    // Single regex pattern for all cases
    const pattern = new RegExp(`\\b${search}\\b`);
    return pattern.test(itemName) || pattern.test(itemSummary);
  });

  // Update result count
  if (resultCount) {
    resultCount.textContent = searchTerm
      ? `${filteredItems.length} result(s) match your search.`
      : "";
  }

  // Get the correct container
  const showsContainer = document.getElementById("shows-container");
  const episodesContainer = document.querySelector(".episodes-container");
  const container =
    renderFunction.name === "renderShows" ? showsContainer : episodesContainer;

  // Clear and render content
  container.innerHTML = "";

  // Always render content, even if search is empty
  if (filteredItems.length === 0 && searchTerm) {
    container.innerHTML =
      "<p>No results found. Try a different search term.</p>";
  } else {
    renderFunction(filteredItems);
  }
};
