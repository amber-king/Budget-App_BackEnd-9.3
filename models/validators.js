const transactionsValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("item_name") && req.body.hasOwnProperty("amount")) {
      next();
    } else if (!req.body.item_name || !req.body.amount) {
      return res
        .status(400)
        .json({ error: "Transactions must contain empty string" });
    } else {
      return res
        .status(400)
        .json({ error: "Transactions must contain a item name and an amount " });
    }
  };
  
  module.exports = { transactionValidator };
  