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
  // Create the label element
  const label = document.createElement("label");
  label.htmlFor = "show-selector"; // Associate the label with the select element
  label.textContent = "Choose a show:"; // Add descriptive text

  // Create the select element
  const showSelector = document.createElement("select");
  showSelector.id = "show-selector";

  // Append the label and select to the section
  section1.appendChild(label);
  section1.appendChild(showSelector);

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a show";
  showSelector.appendChild(defaultOption);
  // Populate dropdown with shows
  shows.forEach((show) => {
    const option = document.createElement("option");
    option.value = show.id;
    option.textContent = show.name;
    showSelector.appendChild(option);
  });
  const backToShows = document.createElement("a");
  backToShows.textContent = "Back to Shows";
  backToShows.id = "back-to-shows-button";
  section1.appendChild(backToShows);
  // Add search results div
  const searchResults = document.createElement("div");
  searchResults.className = "search-results";
  section1.appendChild(searchResults);

  // Section 2: Episodes container
  const section2 = document.createElement("section");
  main.appendChild(section2);

  //shows-container
  const showsContainer = document.createElement("div");
  showsContainer.id = "shows-container";
  section2.appendChild(showsContainer);

  const episodesContainer = document.createElement("div");
  episodesContainer.className = "episodes-container";
  section2.appendChild(episodesContainer);

  rootElem.appendChild(main);
};
