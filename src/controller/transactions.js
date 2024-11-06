const TransactionsModel = require('../models/transactions')

const createNewTransactions = async (req, res) => {
    
    const {body} = req;
    console.log(body);
    try {

        // hasActiveTransaction

        for (const data of body) {
            console.log(data);
            console.log(data.user_id,data.status);

             // Check if user has an active transaction
            const results = await TransactionsModel.hasActiveTransaction(data.user_id, data.status);

            if (results.length > 0) {
                // User already has an active transaction
                return res.status(400).json({ message: 'User must return the current book before borrowing another.' });
            }

            // If no active transaction, proceed with creating a new transaction
            await TransactionsModel.createNewTransaction(data);
        }
        

        res.status(201).json({
            message: 'Add data trasnsactions success.',
            data: body
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

module.exports = {
    createNewTransactions,
}
