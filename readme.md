# ⭐ Quotable
Full-stack web app and API that provides random inspirational quotes to the user

![GNU GPL v3](https://img.shields.io/github/license/TNT10128/Quotable?style=for-the-badge)
![Codefactor code quality](https://img.shields.io/codefactor/grade/github/TNT10128/Quotable?style=for-the-badge)

## Screenshot
![Quotable screenshot](https://i.imgur.com/27UcVfQ.png)

## 📈 Stats
- Over **75,000** quotes
- Over **100** genres

## ℹ️ Description
Quotable is a full-stack web app, including a developer API, that provides random motivational quotes to the user. It uses Node, Express, jQuery, and Bootstrap.

## 🌍 API endpoints
`GET /api/quotes/random` - returns a random quote. `genre` is an optional query parameter that specifies the genre of the quote. Format:
```json
{
    "quote": "Quote goes here",
    "author": "Author goes here",
    "genre": "Genre goes here"
}
```
`GET /api/genres` - returns the list of available quote genres. Format:
```json
{
    "genres": [
        "example",
        "example2"
    ]
}
```
`GET /api/quotes/count` - returns the amount of genres and quotes. Format:
```json
{
    "quotes": 75967,
    "genres": 118
}
```

## ❓ How to use
> Before you begin: Make sure you have **Node.js** and **NPM** installed!

Clone the repository, open the folder with a terminal, and execute the command `npm start`. Navigate to `localhost:3000` in your web browser to use the app. Enjoy!

## 🤗 Credits
Inspirational quote file from [akhiltak/inspirational-quotes](https://github.com/akhiltak/inspirational-quotes). Copyright (c) 2016 Akhil Tak. [License](https://github.com/akhiltak/inspirational-quotes/blob/master/LICENSE)  
Images from [Lorem Picsum](https://picsum.photos)