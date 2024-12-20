export const makePageForEpisodes = (episodeList) => {
  let episodesContainer = document.querySelector(".episodes-container");
  if (!episodeList) {
    episodesContainer.innerHTML =
      "<p>Failed to load episodes. Please try again later.</p>";
    return;
  }
  // episodesContainer.innerHTML = "";
  episodeList.forEach((episode) => {
    const { name, season, number, image, summary } = episode;

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
            src="${image.medium}"
            alt="${name}"
          />
          <div class="episode-summary">
            ${summary}
          </div>
        </div>
    `;

    episodesContainer.insertAdjacentHTML("beforeend", markup);
  });
};
