import {render } from "./render-episode.js";

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

      resultCount.textContent = `${filteredEpisodes.length} episode(s) match your search.`;
    }

    episodesContainer.innerHTML = "";

   render(filteredEpisodes);
  });
};
