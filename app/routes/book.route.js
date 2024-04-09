const express = require('express');
const books = require('../controllers/book.controller');

const router = express.Router();

router.route("/books")
    .get(books.findAllBooks)
    .post(books.create)
    .delete(books.deleteBooks);

router.route("/books/:id")
    .get(books.findOne)
    .put(books.updateBook)
    .delete(books.deleteBook);

module.exports = router;