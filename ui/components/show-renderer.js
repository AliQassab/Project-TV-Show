import { loadEpisodesForShow } from "../actions/show-actions.js";

export const renderShows = (shows) => {
  const showsContainer = document.getElementById("shows-container");
  showsContainer.innerHTML = "";

  shows.forEach((show) => {
    const showCard = document.createElement("div");
    showCard.className = "show-card";

    // Title
    const title = document.createElement("h2");
    title.className = "show-title";
    title.textContent = show.name;

    // Content wrapper
    const content = document.createElement("div");
    content.className = "show-content";

    // Image
    const img = document.createElement("img");
    img.src = show.image?.medium || "placeholder.jpg";
    img.alt = show.name;

    // Summary
    const summary = document.createElement("div");
    summary.className = "summary";
    summary.textContent = show.summary.replace(/<[^>]*>/g, "");

    // Rate info
    const rateInfo = document.createElement("div");
    rateInfo.className = "show-rate";

    // Create rate info paragraphs
    const genres = document.createElement("p");
    const genresStrong = document.createElement("strong");
    genresStrong.textContent = "Genres:";
    genres.appendChild(genresStrong);
    genres.textContent += ` ${show.genres.join(", ")}`;

    const status = document.createElement("p");
    const statusStrong = document.createElement("strong");
    statusStrong.textContent = "Status:";
    status.appendChild(statusStrong);
    status.textContent += ` ${show.status}`;

    const rating = document.createElement("p");
    const ratingStrong = document.createElement("strong");
    ratingStrong.textContent = "Rating:";
    rating.appendChild(ratingStrong);
    rating.textContent += ` ${show.rating.average || "N/A"}`;

    const runtime = document.createElement("p");
    const runtimeStrong = document.createElement("strong");
    runtimeStrong.textContent = "Runtime:";
    runtime.appendChild(runtimeStrong);
    runtime.textContent += ` ${show.runtime} minutes`;

    rateInfo.append(genres, status, rating, runtime);

    // Append everything
    content.append(img, summary, rateInfo);
    showCard.append(title, content);

    showCard.addEventListener("click", () => {
      loadEpisodesForShow(show.id, show.name);
    });

    showsContainer.appendChild(showCard);
  });
};
