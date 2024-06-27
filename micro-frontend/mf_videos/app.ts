const searchInput = document.getElementById("search-input") as HTMLInputElement;
const searchButton = document.getElementById(
  "search-button"
) as HTMLButtonElement;
const videoList = document.getElementById("video-list");
const favoritesList = document.getElementById("favorites-list");

const YOUTUBE_API_KEY = "AIzaSyBdaSOOL3HWcDJBhj59ukJjFSpqiH0-UIg";
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

searchButton.addEventListener("click", async () => {
  const query = searchInput.value;
  if (query && videoList) {
    const response = await fetch(
      `${YOUTUBE_API_URL}?part=snippet&type=video&q=${query}&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    videoList.innerHTML = data.items
      .map(
        (item: any) => `
            <div class="video-item">
                <iframe src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                <button onclick="toggleFavorite('${item.id.videoId}')">Favoritar</button>
            </div>
        `
      )
      .join("");
  }
});

function toggleFavorite(videoId: string) {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const index = favorites.indexOf(videoId);
  if (index === -1) {
    favorites.push(videoId);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  localStorage.setItem("favoritesCount", favorites.length.toString());
  updateFavoritesCount();
}

function updateFavoritesCount() {
  const favoritesCountElement = document.getElementById("favorites-count");
  const favoritesCount = localStorage.getItem("favoritesCount") || "0";
  if (favoritesCountElement) {
    favoritesCountElement.innerText = favoritesCount;
  }
}

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (favoritesList) {
    favoritesList.innerHTML = favorites
      .map(
        (videoId: string) => `
            <div class="video-item">
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                <button onclick="toggleFavorite('${videoId}')">Remover dos Favoritos</button>
            </div>
        `
      )
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get("view");
  if (view === "favorites" && favoritesList && videoList) {
    videoList.style.display = "none";
    favoritesList.style.display = "block";
    loadFavorites();
  }
  updateFavoritesCount();
});
