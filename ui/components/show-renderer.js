import { loadEpisodesForShow } from "../actions/show-actions.js";
export const renderShows = (shows) => {
  const showsContainer = document.getElementById("shows-container");
  showsContainer.innerHTML = "";

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
      loadEpisodesForShow(show.id, show.name);
    });
    showsContainer.appendChild(showCard);
  });
};
