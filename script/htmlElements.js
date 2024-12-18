export const htmlElements = () => {
  const rootElem = document.getElementById("root");
  const episodesContainer = document.createElement("div");
  episodesContainer.className = "episodes-container";
  const header = document.createElement("div");
  header.className = "header";
  const searchResults = document.createElement("div");
  searchResults.className = "search-results";
  header.appendChild(searchResults);
  rootElem.appendChild(header);
  rootElem.appendChild(episodesContainer);
};
