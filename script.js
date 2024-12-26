
import { htmlElements } from "./script/htmlElements.js";

import { fetchShows, fetchEpisodes } from "./script/api.js";
import { renderEpisodes } from "./script/render.js";
import { searchEpisode, selectedShow } from "./script/search-episode.js";

async function setup() {
  // Fetch and render shows
  const allShows = await fetchShows();
  htmlElements(allShows);


  // Fetch and render episodes for the default show
  const defaultShowId = allShows[0].id;
  const allEpisodes = await fetchEpisodes(defaultShowId);
  renderEpisodes(allEpisodes);
  searchEpisode(allEpisodes);
  selectedShow();
}


window.onload = setup;
