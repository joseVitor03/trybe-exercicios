const express = require('express');
const BooksController = require('./controller/BooksController');
const app = express();

app.use(express.json());

app.get('/books', BooksController.getAll)

app.get("/books/:id", BooksController.getById);

module.exports = app