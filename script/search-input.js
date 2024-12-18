import { makePageForEpisodes } from "./episodes-page.js";

export const searchEpisode = (allEpisodes) => {
  const episodesContainer = document.querySelector(".episodes-container");

  const searchResults = document.querySelector(".search-results");

  const markup = `
  <input
  type="text"
  id="search-input"
  placeholder="Search episodes..."

  />
  <p id="result-count"></p>
  `;
  searchResults.innerHTML = markup;
  const searchInput = document.getElementById("search-input");
  const resultCount = document.getElementById("result-count");

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    let filteredEpisodes;

    if (searchTerm === "") {
      filteredEpisodes = allEpisodes;
      resultCount.textContent = "";
    } else {
      filteredEpisodes = allEpisodes.filter((episode) => {
        return (
          episode.name.toLowerCase().includes(searchTerm) ||
          episode.summary.toLowerCase().includes(searchTerm)
        );
      });

      // Update the result count with the number of matched episodes
      resultCount.textContent = `${filteredEpisodes.length} episode(s) match your search.`;
    }

    // Clear the episodes container
    episodesContainer.innerHTML = "";

    // Render the filtered (or full) episodes
    makePageForEpisodes(filteredEpisodes);
  });
};
