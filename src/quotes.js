import fs from 'node:fs';

export const quotes = [];

let genreSet;
export let genres;

export function loadQuotesFromFile(fileName) {
    const file = fs.readFileSync(fileName, "utf8");
    const lines = file.split("\n");
    lines.forEach(line => {
        const lineSplit = line.split(';');
        const quote = lineSplit[0];
        const author = lineSplit[1];
        const genre = lineSplit[2];
        quotes.push({
            quote: quote,
            author: author,
            genre: genre,
        });
    });
    genreSet = new Set(quotes.map(quote => quote.genre));
    genres = Array.from(genreSet);
}

export function getRandomQuoteByGenre(genre) {
    const filtered = quotes.filter(quote => quote.genre === genre);
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

export function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}