// ------------
// Dependencies
// ------------
const mysql = require('mysql');

let connection;

// ----------------------
// Connection to Database
// ----------------------
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'ThomasW',
    password: '',
    database: 'burgers_db',
  });
}

// -----------------
// Make a connection
// -----------------
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
