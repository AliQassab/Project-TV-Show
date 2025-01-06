import { fetchEpisodes } from "../api.js";
import { searchContent } from "../events/search-handler.js";
import { updateUIForEpisodes } from "../utils/ui-state.js";
import { renderEpisodes } from "../components/episode-renderer.js";

export const loadEpisodesForShow = async (showId, showName) => {
  const episodeTitle = document.querySelector(".current-show-title");

  const allEpisodes = await fetchEpisodes(showId);

  const showTitleElement = document.querySelector(".current-show-title");
  if (showTitleElement) {
    showTitleElement.textContent = showName;
    episodeTitle.style.display = "block";
  }

  searchContent(allEpisodes, renderEpisodes, "Search episodes...");
  renderEpisodes(allEpisodes);
  updateUIForEpisodes();
};
