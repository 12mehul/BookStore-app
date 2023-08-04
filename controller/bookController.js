const express = require("express");
const router = express.Router();
const bookService = require("../service/bookService");

router.get("/books-list", async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch books." });
  }
});

module.exports = router;
