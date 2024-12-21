import {render} from "./render-episode.js";

export const makePageForEpisodes = async () => {

  let episodesContainer = document.querySelector(".episodes-container");
  
  const apiUrl = "https://api.tvmaze.com/shows/82/episodes";
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
      const data = await res.json();
      render(data);
      return data
  } catch (error) {
    console.error("Error fetching episodes:", error);
    episodesContainer.innerHTML =
    "<p>Failed to load episodes. Please try again later.</p>";
  }
};

