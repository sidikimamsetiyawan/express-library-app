const BooksModel = require('../models/books')

const getBooksStatus = async (req, res) => {
    // Pemangillan model bersifat asynchronous

    /*
        {
            "status": "Overdue"
        }
        {
            "user_id": 2
        }
        {
            "book_id": 5
        }

    */
    const { status, user_id, book_id } = req.body;
    const conditions = [];
    let message = "Retrieve all book data.";

    try {
        let myQuery = ` SELECT 
            t.transaction_id,
            b.title AS book_title,
            u.username AS username,
            t.transaction_date,
            t.return_date,
            t.status
            FROM transactions t
            JOIN books b ON t.book_id = b.book_id
            JOIN users u ON t.user_id = u.user_id `;

        if (status != undefined) {
            // Filter by status (e.g., "Overdue", "On Loan")
            conditions.push(`t.status = '${status}' `);
            message = "Retrieve all book data based on filtered Status.";
        } 
        
        if (user_id != undefined) {
            // You might add a function to filter by user_id if implemented in the model
            conditions.push(`t.user_id = ${user_id} `);
            message = "Retrieve all book data based on filtered Users ID.";
        } 
        
        if (book_id != undefined) {
            // Add a function in the model to filter by book_id if desired
            conditions.push(`t.book_id = ${book_id} `);
            message = "Retrieve all book data based on filtered Books ID.";
        }

        if (conditions.length > 0) {
            myQuery += ` WHERE ` + conditions.join(" AND ");
        }
        console.log(myQuery);
        const [data] = await BooksModel.queryExecute(myQuery);
        
        return res.json({
            message: message,
            data: data
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
    getBooksStatus,
}
