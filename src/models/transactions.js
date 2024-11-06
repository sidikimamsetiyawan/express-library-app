const dbPool = require('../config/database');

const createNewTransaction = (body) => {
    const SQLQuery = `  INSERT INTO Transactions (user_id, book_id, transaction_date, return_date, status, created_by, created_date, modified_by, modified_date)
                        VALUES (${body.user_id}, ${body.book_id}, '${body.transaction_date}', '${body.return_date}', '${body.status}', 'sysadmin', now(), 'sysadmin', now()) `;

    return dbPool.execute(SQLQuery);
}

const hasActiveTransaction = (user_id, status) => {
    console.log(user_id, status);
    const SQLQuery = ` SELECT * FROM Transactions WHERE user_id = ${user_id} AND uCase(status) =  UCase('${status}')`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    createNewTransaction,
    hasActiveTransaction,
}
