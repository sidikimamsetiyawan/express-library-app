const dbPool = require('../config/database');

const queryExecute = (myQuery) => {
    const SQLQuery = ` ${myQuery} `;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    queryExecute,
}
