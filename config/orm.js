// ----------------------
// Import MySQL connection
// ----------------------
const connection = require('../config/connection');

// --------------------------------------------
// Generating function for query question marks
// --------------------------------------------

const questionMarks = (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push('?');
  }
  return arr.toString();
};

// --------------------------------------------
// Generating function for MySql syntax
// --------------------------------------------
function objToSql(ob) {
  const arr = [];

  for (const key in ob) {
    let value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }

      arr.push(`${key}=${value}`);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += questionMarks(vals.length);
    queryString += ') ';

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};
// ----------
// Export ORM
// ----------
module.exports = orm;
