export const htmlElements = () => {
  const rootElem = document.getElementById("root");
  const header = document.createElement("header");
  header.className = "header";
  rootElem.appendChild(header);
  const main = document.createElement("main");
  const section1 = document.createElement("section");
  section1.id = "search-bar";
  main.appendChild(section1);
  const searchResults = document.createElement("div");
  searchResults.className = "search-results";
  section1.appendChild(searchResults);
  const section2 = document.createElement("section");
  main.appendChild(section2);
  const episodesContainer = document.createElement("div");
  episodesContainer.className = "episodes-container";
  section2.appendChild(episodesContainer);
  rootElem.appendChild(main);
};
