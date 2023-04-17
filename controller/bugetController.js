const express = require("express");

const transactions = express.Router();

const transactionsArray = require("../models/transactions");

// GET -- all the buget transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// GET -- gets the users selected budget transaction information
transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    res.json(transactionsArray[index]);
  } else {
    res.status(404).json({ error: "Sorry, not found 😕" });
  }
});

// POST -- adds a new transaction to the budget via users input
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.send(transactionsArray);
});

// DELETE -- deletes the transactions from budget as user requested
transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    if (transactionsArray[index]) {
      const deletedTransactions = transactionsArray.splice(index, 1); // returns deleted logs
      res.status(200).json(transactionsArray);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  }
});

module.exports = transactions;
