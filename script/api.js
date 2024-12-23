export const fetchEpisodes = async (showId) => {
  const apiUrl = `https://api.tvmaze.com/shows/${showId}/episodes`;
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch episodes: ${res.status}`);
    }
    const episodes = await res.json();

    return episodes;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }
};
export const fetchShows = async () => {
  const apiUrl = "https://api.tvmaze.com/shows";
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch shows: ${res.status}`);
    }
    const shows = await res.json();
    console.log(shows, "shows");
    // Sort shows alphabetically, case-insensitively
    return shows.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  } catch (error) {
    console.error("Error fetching shows:", error);
    return [];
  }
};
