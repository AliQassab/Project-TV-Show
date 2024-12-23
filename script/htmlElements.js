export const htmlElements = (shows) => {
  const rootElem = document.getElementById("root");

  // Create header
  const header = document.createElement("header");
  header.className = "header";
  rootElem.appendChild(header);

  // Create main
  const main = document.createElement("main");

  // Section 1: Search bar with dropdown
  const section1 = document.createElement("section");
  section1.id = "search-bar";
  main.appendChild(section1);

  // Create and append the dropdown inside section1
  const showSelector = document.createElement("select");
  showSelector.id = "show-selector";
  section1.appendChild(showSelector);

  // Populate dropdown with shows
  shows.forEach((show) => {
    const option = document.createElement("option");
    option.value = show.id;
    option.textContent = show.name;
    showSelector.appendChild(option);
  });

  // Add search results div
  const searchResults = document.createElement("div");
  searchResults.className = "search-results";
  section1.appendChild(searchResults);

  // Section 2: Episodes container
  const section2 = document.createElement("section");
  main.appendChild(section2);

  const episodesContainer = document.createElement("div");
  episodesContainer.className = "episodes-container";
  section2.appendChild(episodesContainer);

  rootElem.appendChild(main);
};
