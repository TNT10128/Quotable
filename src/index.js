import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import * as quotes from './quotes.js';

const PORT = process.env.API_PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(__dirname + '/public/main'));

function prepareQuotes() {
    console.info('ℹ️  Preparing quotes...');
    quotes.loadQuotesFromFile(__dirname + '/../resources/quotes.csv');
    console.info(`✅ Done!`);
}

function areQuotesPrepared() {
    return quotes.quotes.length > 0;
}

app.listen(PORT, () => {
    console.info(`✅ Success! App listening on port ${PORT}.`);
    prepareQuotes();
});

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/public/main/index.html'));
});

app.get('/api/genres', (req, res) => {
    return res.json({
        genres: quotes.genres
    });
});

app.get('/api/quotes/random', (req, res) => {
    const genre = req.query.genre;
    const quote = genre ? quotes.getRandomQuoteByGenre(genre) : quotes.getRandomQuote();
    return res.json(quote);
});

app.get('/api/quotes/count', (req, res) => {
    return res.json({
        quotes: quotes.quotes.length,
        genres: quotes.genres.length
    });
});