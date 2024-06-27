document.addEventListener("DOMContentLoaded", () => {
  const favoritesCountElement = document.getElementById("favorites-count");

  // Simulate fetching favorites count from a storage or API
  const favoritesCount = localStorage.getItem("favoritesCount") || "0";
  if (favoritesCountElement) {
    favoritesCountElement.innerText = favoritesCount;
  }
});
