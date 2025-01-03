import { fetchEpisodes, fetchShows } from "./api.js";
import { searchContent } from "./eventListener.js";

export function renderEpisodes(episodeList) {
  let episodesContainer = document.querySelector(".episodes-container");
  episodesContainer.innerHTML = "";
  episodeList.forEach((episode) => {
    // const { number, summary } = episode;
    const name = episode.name || "Unknown Title";
    const season = episode.season || 0;
    const number = episode.number || 0;
    const image = episode.image?.medium || "https://via.placeholder.com/150"; // Default image
    const summary = episode.summary || "No summary available";
    const episodeCode = `S${season.toString().padStart(2, "0")}E${number
      .toString()
      .padStart(2, "0")}`;

    const markup = `
      <div class="episode">
        <div class="episode-header">
          <h3 class="episode-title">${name}</h3>
          <p class="episode-code">${episodeCode}</p>
        </div>
        <img
          src="${image}"
          alt="${name}"
        />
        <div class="episode-summary">
          ${summary}
        </div>
      </div>
  `;

    episodesContainer.insertAdjacentHTML("beforeend", markup);
  });
}

export const renderShows = (shows) => {
  const showsContainer = document.getElementById("shows-container");
  showsContainer.innerHTML = ""; // Clear previous content

  shows.forEach((show) => {
    const showCard = document.createElement("div");
    showCard.className = "show-card";

    showCard.innerHTML = `
      <h2 class="show-title">${show.name}</h2>
      <div class="show-content">
      <img src="${show.image?.medium || "placeholder.jpg"}" alt="${show.name}">
      <div class="summary">${show.summary}</div>
      <div class="show-rate">
      <p><strong>Genres:</strong> ${show.genres.join(", ")}</p>
      <p><strong>Status:</strong> ${show.status}</p>
      <p><strong>Rating:</strong> ${show.rating.average || "N/A"}</p>
      <p><strong>Runtime:</strong> ${show.runtime} minutes</p>
      </div>
      </div>
    `;

    // Add click event to fetch episodes for the show
    showCard.addEventListener("click", () => {
      loadEpisodesForShow(show.id);
    });
    showsContainer.appendChild(showCard);
  });
};

const loadEpisodesForShow = async (showId) => {
  const allEpisodes = await fetchEpisodes(showId);

  searchContent(allEpisodes, renderEpisodes, "Search episodes...");
  renderEpisodes(allEpisodes);

  document.getElementById("shows-container").style.display = "none";
  document.querySelector(".episodes-container").style.display = "grid";
  document.getElementById("back-to-shows-button").style.display = "block";
  document.getElementById("show-selector").style.display = "none";
};
