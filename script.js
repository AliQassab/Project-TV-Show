import { makePageForEpisodes } from "./script/episodes-page.js";

import { searchEpisode } from "./script/search-input.js";
import { htmlElements } from "./script/htmlElements.js";

function setup() {
  const allEpisodes = getAllEpisodes();
  app(allEpisodes);
}

function app(episodes) {
  htmlElements();
  searchEpisode(episodes);
  makePageForEpisodes(episodes);
}

window.onload = setup;
