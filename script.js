
import { makePageForEpisodes } from "./script/episodes-page.js";
import { searchEpisode } from "./script/search-input.js";
import { htmlElements } from "./script/htmlElements.js";

async function setup() {
  htmlElements();
  const allEpisodes = await makePageForEpisodes();
  searchEpisode(allEpisodes);
}


window.onload = setup;
