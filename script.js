import { searchEpisode } from "./script/search-episode.js";
import { htmlElements } from "./script/htmlElements.js";
import { fetchEpisodes } from "./script/fetchEpisodes.js";
async function setup() {
  htmlElements();
  const allEpisodes = await fetchEpisodes();
  searchEpisode(allEpisodes);
}

window.onload = setup;
