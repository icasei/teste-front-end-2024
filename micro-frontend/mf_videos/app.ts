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
                <button onclick="toggleFavorite('${item.id.videoId}')">⭐</button>
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

function updateFavoritesCount(length?: any) {
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
                <button onclick="toggleFavorite('${videoId}')">❌</button>
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

// Função para redirecionar para a página de vídeos
function redirectToVideos(): void {
  window.location.href = "http://localhost:8081";
}

// Função para redirecionar para a página de favoritos
function redirectToFavorites(): void {
  window.location.href = "http://localhost:8081?view=favorites";
}

// Adiciona event listeners aos botões de redirecionamento
document
  .getElementById("search-button")
  ?.addEventListener("click", redirectToVideos);
document
  .getElementById("favorites-list")
  ?.addEventListener("click", redirectToFavorites);

// Busca a contagem de favoritos do localStorage ou de uma API backend
const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
updateFavoritesCount(favorites.length);
