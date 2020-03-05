const Transaction = require('../models/Transaction');

// @desc        get all transactions
// @route       GET /api/v1/transactions
// @access      public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// @desc        add transaction
// @route       POST /api/v1/transactions
// @access      public
exports.addTransaction = async (req, res, next) => {
    res.send('POST transactions');
}

// @desc        delete transaction
// @route       DELETE /api/v1/transactions/:id
// @access      public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
}