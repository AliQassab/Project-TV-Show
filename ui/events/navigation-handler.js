import { searchContent } from "./search-handler.js";

export const addBackToShowsLink = (allShows, renderShows) => {
  const backButton = document.getElementById("back-to-shows-button");
  const showsContainer = document.getElementById("shows-container");
  const episodesContainer = document.querySelector(".episodes-container");
  const showSelector = document.getElementById("show-selector");
  const episodeTitle = document.querySelector(".current-show-title");

  backButton.addEventListener("click", () => {
    // Hide episodes container
    episodesContainer.style.display = "none";

    // Show shows container
    showsContainer.style.display = "block";
    // Hide episodeTitle
    episodeTitle.style.display = "none";
    // Reset search input and result count
    const searchInput = document.getElementById("search-input");
    const resultCount = document.getElementById("result-count");
    if (searchInput) {
      const newSearchInput = searchInput.cloneNode(true);
      searchInput.parentNode.replaceChild(newSearchInput, searchInput);
      newSearchInput.value = "";
    }
    if (resultCount) resultCount.textContent = "";

    // Reset the show-selector
    if (showSelector) {
      showSelector.value = "";
      showSelector.style.display = "block";
    }

    // Re-render all shows and re-initialize search
    renderShows(allShows);
    searchContent(allShows, renderShows, "Search shows...");

    // Hide the back button
    backButton.style.display = "none";
  });
};
