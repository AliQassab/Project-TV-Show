import { filterAndRender } from "./helperFnc.js";

import { renderShows } from "./render.js";
export const searchContent = (items, renderFunction, placeholderText) => {
  const container =
    document.querySelector(".episodes-container") ||
    document.querySelector(".shows-container");

  const searchResults = document.querySelector(".search-results");
  const showSelector = document.getElementById("show-selector");
  const backButton = document.getElementById("back-to-shows-button");

  const markup = `
    <input
      type="text"
      id="search-input"
      placeholder="${placeholderText}"
    />
    <p id="result-count"></p>
  `;
  searchResults.innerHTML = markup;

  const searchInput = document.getElementById("search-input");
  const resultCount = document.getElementById("result-count");

  // Remove old event listener before adding new one
  const newSearchInput = searchInput.cloneNode(true);
  searchInput.parentNode.replaceChild(newSearchInput, searchInput);

  newSearchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value;

    if (renderFunction.name === "renderShows") {
      // For shows
      if (!searchTerm) {
        // When search is empty
        backButton.style.display = "none";
        showSelector.style.display = "block";
        showSelector.value = "";
        renderFunction(items);
        resultCount.textContent = "";
      } else {
        // When searching
        backButton.style.display = "block";
        showSelector.style.display = "none";
        filterAndRender(
          searchTerm,
          items,
          renderFunction,
          resultCount,
          container
        );
      }
    } else {
      // For episodes
      showSelector.style.display = "none";
      filterAndRender(
        searchTerm,
        items,
        renderFunction,
        resultCount,
        container
      );
    }
  });
};
export const selectedShow = (allShows) => {
  const showSelector = document.getElementById("show-selector");
  const resultCount = document.getElementById("result-count");
  const showsContainer = document.getElementById("shows-container");
  const episodesContainer = document.querySelector(".episodes-container");
  const backButton = document.getElementById("back-to-shows-button");

  showSelector.addEventListener("change", (e) => {
    const selectedShowId = e.target.value;

    if (selectedShowId) {
      const selectedShow = allShows.find(
        (show) => show.id === parseInt(selectedShowId)
      );

      const searchInput = document.getElementById("search-input");
      if (searchInput && selectedShow) {
        searchInput.value = selectedShow.name;
        searchInput.dispatchEvent(new Event("input"));
      }

      // Show selected show and adjust visibility
      episodesContainer.style.display = "none";
      showsContainer.style.display = "block";
      showSelector.style.display = "none";
      backButton.style.display = "block";
    } else {
      const searchInput = document.getElementById("search-input");
      if (searchInput) {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
      }
    }
  });
};
export const addBackToShowsLink = (allShows, renderShows) => {
  const backButton = document.getElementById("back-to-shows-button");
  const showsContainer = document.getElementById("shows-container");
  const episodesContainer = document.querySelector(".episodes-container");
  const showSelector = document.getElementById("show-selector");

  backButton.addEventListener("click", () => {
    // Hide episodes container
    episodesContainer.style.display = "none";

    // Show shows container
    showsContainer.style.display = "block";

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
