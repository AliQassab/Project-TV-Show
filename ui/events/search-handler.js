import { filterAndRender } from "../utils/filter.js";
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
