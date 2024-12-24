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
