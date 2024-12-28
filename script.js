
import { htmlElements } from "./script/htmlElements.js";

import { fetchShows, fetchEpisodes } from "./script/api.js";
import { renderEpisodes, renderShows } from "./script/render.js";
import { searchEpisode, selectedShow } from "./script/search-episode.js";

async function setup() {
  // Fetch and render shows
  const allShows = await fetchShows();
  htmlElements(allShows);


  // Fetch and render episodes for the default show
  renderShows(allShows)

  // renderEpisodes(allEpisodes);
  searchEpisode(allShows);
  selectedShow();
}


window.onload = setup;
