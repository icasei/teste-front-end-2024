document.getElementById("videos-btn")?.addEventListener("click", () => {
  window.location.href = "http://localhost:8081";
});

document.getElementById("favorites-btn")?.addEventListener("click", () => {
  window.location.href = "http://localhost:8081?view=favorites";
});

function updateFavoritesCount(count: number) {
  const countSpan = document.getElementById("favorites-count");
  if (countSpan) {
    countSpan.textContent = count.toString();
  }
}

// Fetch favorites count from localStorage or a backend API
const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
updateFavoritesCount(favorites.length);
