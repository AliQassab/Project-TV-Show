export const selectedShow = (allShows) => {
  const showSelector = document.getElementById("show-selector");
  const showsContainer = document.getElementById("shows-container");
  const episodesContainer = document.querySelector(".episodes-container");
  const backButton = document.getElementById("back-to-shows-button");

  const updateSearchInput = (searchTerm = "") => {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.value = searchTerm;
      searchInput.dispatchEvent(new Event("input"));
    }
  };

  showSelector.addEventListener("change", (e) => {
    const selectedShowId = e.target.value;

    if (selectedShowId) {
      const selectedShow = allShows.find(
        (show) => show.id === parseInt(selectedShowId)
      );
      updateSearchInput(selectedShow?.name);

      // Show selected show and adjust visibility
      episodesContainer.style.display = "none";
      showsContainer.style.display = "block";
      showSelector.style.display = "none";
      backButton.style.display = "block";
    } else {
      updateSearchInput();
    }
  });
};
