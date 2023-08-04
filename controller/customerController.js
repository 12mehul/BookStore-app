const express = require("express");
const router = express.Router();
const customerService = require("../service/customerService");

router.post("/create", async (req, res) => {
  const { name } = req.body;
  try {
    const customer = await customerService.createCustomer(name);
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ error: "Unable to create customer." });
  }
});

module.exports = router;
