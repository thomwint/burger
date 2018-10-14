const orm = require('../config/orm');

const burgers = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },
  insertOne: (cols, vals, cb) => {
    orm.insertOne('burgers', cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  },
};

// ------
// Export
// ------
module.exports = burgers;
