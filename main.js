// Função para buscar os dados do index.min.json
async function getMangaDetails(mangaId) {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Sinerio251/Oniichan-wa-Oshimai-Manga-Hentai-PT-BR-/main/index.min.json');
    const data = await response.json();
    return data.mangas[0];
  } catch (error) {
    console.error('Erro ao carregar o mangá:', error);
    return null;
  }
}
