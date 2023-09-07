const express = require("express");

const transactions = express.Router();

const transactionsArray = require("../models/transactions");

const {transactionsValidator} = require("../models/validators")

// GET -- all the budget transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// GET -- gets the users selected budget transaction information
transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    res.json(transactionsArray[index]);
  } else {
    res.status(404).redirect("/transactions");
  }
});

// POST -- adds a new transaction to the budget via users input
transactions.post("/", transactionsValidator, (req, res) => {
  transactionsArray.push(req.body);
  res.send(transactionsArray);
});



// PUT -- updates the transactions
transactions.put("/:index", transactionsValidator, (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
      transactionsArray[index] = req.body;
      res.status(200).json(transactionsArray[index]);
    } else {
      res.status(404).json({ error: "Sorry, not found" });
    }
  });


// DELETE -- deletes the transactions from budget as user requested
transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    if (transactionsArray[index]) {
      const deletedTransactions = transactionsArray.splice(index, 1); // returns deleted transactions
      res.status(200).json(transactionsArray);
    } else {
      res.status(404).json(deletedTransactions);
    }
  }
});


module.exports = transactions;
