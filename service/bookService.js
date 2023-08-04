const bookRepository = require("../repository/bookRepository");

async function getAllBooks() {
  return bookRepository.getAllBooks();
}

module.exports = {
  getAllBooks,
};
