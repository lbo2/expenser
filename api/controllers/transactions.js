const Transaction = require('../models/Transaction');

// @desc        get all transactions
// @route       GET /api/v1/transactions
// @access      public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

// @desc        add transaction
// @route       POST /api/v1/transactions
// @access      public
exports.addTransaction = (req, res, next) => {
    res.send('POST transactions');
}

// @desc        delete transaction
// @route       DELETE /api/v1/transactions/:id
// @access      public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}