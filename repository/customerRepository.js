const db = require("../db");
const Customer = require("../entity/Customer");

async function createCustomer(name) {
  const query = "INSERT INTO customers (name) VALUES ($1) RETURNING *";
  const values = [name];
  const result = await db.query(query, values);
  return new Customer(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].points
  );
}

module.exports = {
  createCustomer,
};
