const mysql = require('mysql');

// Create the MySQL connection object
let connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pick_a_pet'
    })
}

// Make the connection to MySQL
connection.connect(function(err) {
    if (err) {
        console.error('\nERROR: MySQL connection error -- ' + err.stack);
        return;
    }
    console.log('\nConnected to MySQL database as id ' + connection.threadId);
});

// Export
module.exports = connection;

// =============== TEST CODE ===============
// console.log(connection);