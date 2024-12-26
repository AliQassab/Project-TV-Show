export const fetchEpisodes = async (showId) => {

    const apiUrl = `https://api.tvmaze.com/shows/${showId}/episodes`;
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
        const data = await res.json();
      
        return data
    } catch (error) {
      console.error("Error fetching episodes:", error);
  
    }
  };

export const fetchShows = async () => {
   
    const apiUrl = `https://api.tvmaze.com/shows`;
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
        const data = await res.json();
       console.log(data, "shows")
       console.log("first")
        return data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  };
  

