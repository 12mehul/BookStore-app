const db = require("../db");
const Book = require("../entity/Book");

async function getAllBooks() {
  const query = "SELECT * FROM books";
  const result = await db.query(query);
  return result.rows.map(
    (row) => new Book(row.id, row.title, row.writer, row.coverImage, row.point)
  );
}

module.exports = {
  getAllBooks,
};
