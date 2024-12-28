import { fetchEpisodes } from "./api.js";

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
    showsContainer.innerHTML = '';

    shows.forEach((show) => {
      const showCard = document.createElement("div");
      showCard.className = "show-card";
        showCard.innerHTML = `
        <h2 class="Show-title">${show.name}</h2>
        <div class="show-content">
        <img src="${show.image?.medium || "placeholder.jpg"}" alt="${show.name}">
        <div class="summary">${show.summary}</div>
      <div class="show-rate">
        <p><strong>Rating:</strong>${show.rating.average}</p>
        <p><strong>Genres</strong>${show.genres}</p>
        <p><strong>Status</strong>${show.status}</p>
        <p><strong>Runtime</strong>${show.runtime}</p>
    
    </div>
      `
      showCard.addEventListener("click", () => {
        loadEpisodesForShow(show.id)
      })
      showsContainer.appendChild(showCard)
    })

  }

  const loadEpisodesForShow = async (showId) => {
    const allEpisodes = await fetchEpisodes(showId);
    renderEpisodes(allEpisodes);
    document.querySelector(".episodes-container").style.display = "grid";
    document.getElementById("shows-container").style.display = "none";
  } 