const mysql = require('mysql');

const config = {
    host: process.env.DB_HOST ?? 'localhost',
    user: 'app',
    password: 'app',
    database: 'app',
    multipleStatements: true,
    port: 3306
};

const PeopleDbConnection = () => {
    return mysql.createConnection(config);
};

module.exports = PeopleDbConnection;
