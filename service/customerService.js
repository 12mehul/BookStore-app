const customerRepository = require("../repository/customerRepository");

async function createCustomer(name) {
  return customerRepository.createCustomer(name);
}

module.exports = {
  createCustomer,
};
