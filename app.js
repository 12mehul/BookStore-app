const express = require("express");
const app = express();

app.use(express.json());

const customerController = require("./controller/customerController");
const bookController = require("./controller/bookController");

app.use("/api/customers", customerController);
app.use("/api/books", bookController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
