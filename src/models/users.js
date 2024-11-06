const { DataTypes } = require("sequelize");
const dbPool = require('../config/database');


const createNewUser = (body) => {
    console.log(body)
    const SQLQuery = `  INSERT INTO users (username, password, email, role, created_by, created_date, modified_by, modified_date) 
                        VALUES ('${body.username}', '${body.password}', '${body.email}', '${body.role}', 'sysadmin', now(), 'sysadmin', now())`;

    console.log(SQLQuery)

    return dbPool.execute(SQLQuery);
}

const loginUsers = (email) => {
    
    const SQLQuery = `SELECT * FROM users WHERE email = '${email}'`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    createNewUser,
    loginUsers,
}