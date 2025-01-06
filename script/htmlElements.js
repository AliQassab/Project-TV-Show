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


  const showsContainer = document.createElement("div");
  showsContainer.id = "shows-container";
  section2.appendChild(showsContainer);

  const episodesContainer = document.createElement("div");
  episodesContainer.className = "episodes-container";
  section2.appendChild(episodesContainer);

  // Create and add a Back button for navigating back to the show list
  const backButton = document.createElement("button");
  backButton.id = "back-button";
  backButton.textContent = "Back to Shows";
  backButton.style.display = "none"; // Hide the button initially
  backButton.addEventListener("click", () => {
    // Show the shows container and hide the episodes container
  episodesContainer.style.display = "none";
  showsContainer.style.display = "block";
  backButton.style.display = "none"; // Hide the back button when in show list view
  });

  header.appendChild(backButton);

  rootElem.appendChild(main);
};
