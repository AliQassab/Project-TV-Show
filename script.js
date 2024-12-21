// import { makePageForEpisodes } from "./script/episodes-page.js";

// import { searchEpisode } from "./script/search-input.js";
// import { htmlElements } from "./script/htmlElements.js";

// async function setup() {
//   htmlElements();

//   const allEpisodes = await makePageForEpisodes();
//   app(allEpisodes);
// }

// function app(allEpisodes) {
//   searchEpisode(allEpisodes);
//   makePageForEpisodes(allEpisodes);
// }

// window.onload = setup;
import { makePageForEpisodes } from "./script/episodes-page.js";
import { searchEpisode } from "./script/search-input.js";
import { htmlElements } from "./script/htmlElements.js";

async function setup() {
  htmlElements();
  const allEpisodes = await fetchEpisodes();
  app(allEpisodes);
}

function app(allEpisodes) {
  searchEpisode(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

async function fetchEpisodes() {
  const apiUrl = "https://api.tvmaze.com/shows/82/episodes";
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching episodes:", error);
  }
}

window.onload = setup;
