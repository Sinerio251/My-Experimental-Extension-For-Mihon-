async function getMangaDetails(mangaId) {
     const response = await fetch('https://raw.githubusercontent.com/Sinerio251/Oniichan-wa-Oshimai-Manga-Hentai-PT-BR-/main/index.min.json');
     const data = await response.json();
     return data.mangas[0];
}
