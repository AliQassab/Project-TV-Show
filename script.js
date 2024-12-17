function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");

//   // Loop through each episode and create a card
//   episodeList.forEach((episode) => {
//     const episodeElem = document.createElement("div");
//     episodeElem.classList.add("episode");

//     // Episode image
//     const imageElem = document.createElement("img");
//     imageElem.src = episode.image.medium;
//     imageElem.alt = episode.name;

//     // Create the episode-header div for title and code
//     const headerElem = document.createElement("div");
//     headerElem.classList.add("episode-header");

//     // Title (h3) and episode code (p)
//     const titleElem = document.createElement("h3");
//     titleElem.classList.add("episode-title");
//     titleElem.textContent = episode.name;

//     const codeElem = document.createElement("p");
//     codeElem.classList.add("episode-code");
//     codeElem.textContent = `S${episode.season
//       .toString()
//       .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;

//     // Append title and code to the header
//     headerElem.appendChild(titleElem);
//     headerElem.appendChild(codeElem);

//     // Episode summary
//     const summaryElem = document.createElement("p");
//     summaryElem.classList.add("episode-summary");
//     summaryElem.innerHTML = episode.summary;

//     // Episode content div
//     const contentElem = document.createElement("div");
//     contentElem.classList.add("episode-content");
//     contentElem.appendChild(summaryElem);

//     // Append everything
//     episodeElem.appendChild(headerElem);
//     episodeElem.appendChild(imageElem);
//     episodeElem.appendChild(contentElem);

//     // Add the episode card to the root element
//     rootElem.appendChild(episodeElem);
//   });
// }
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  // Loop through each episode and create a card
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

    // Insert the generated markup into the DOM
    rootElem.insertAdjacentHTML("beforeend", markup);
  });
}

window.onload = setup;
