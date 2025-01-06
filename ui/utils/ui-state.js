export const updateUIForEpisodes = () => {
  document.getElementById("shows-container").style.display = "none";
  document.querySelector(".episodes-container").style.display = "grid";
  document.getElementById("back-to-shows-button").style.display = "block";
  document.getElementById("show-selector").style.display = "none";
};
