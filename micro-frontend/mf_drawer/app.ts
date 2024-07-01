// Função para mostrar a seção de vídeos
export function showVideos(): void {
  const videosContent = document.getElementById("videosContent")!;
  const favoritesContent = document.getElementById("favoritesContent")!;

  videosContent.style.display = "block";
  favoritesContent.style.display = "none";
}

// Função para mostrar a seção de favoritos
export function showFavorites(): void {
  const videosContent = document.getElementById("videosContent");
  const favoritesContent = document.getElementById("favoritesContent");

  if (videosContent && favoritesContent) {
    videosContent.style.display = "none";
    favoritesContent.style.display = "block";
  }
}

// Função para atualizar a contagem de favoritos
export function updateFavoritesCount(count: number): void {
  const countSpan = document.getElementById("favorites-count");
  if (countSpan) {
    countSpan.textContent = count.toString();
  }
}

// Adiciona os event listeners aos botões
document.getElementById("videos-btn")?.addEventListener("click", showVideos);
document
  .getElementById("favorites-btn")
  ?.addEventListener("click", showFavorites);

// Busca a contagem de favoritos do localStorage ou de uma API backend
const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
updateFavoritesCount(favorites.length);
