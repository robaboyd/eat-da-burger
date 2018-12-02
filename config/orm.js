const connection = require('./connection.js');

const orm = {

  selectAll(table, cb) {
    const query = 'SELECT * FROM ??';

    connection.query(query, [table], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(table, colOne, colTwo, valOne, valTwo, cb) {
    const query = 'INSERT INTO ??(??,??) VALUES (?, ?)';
    connection.query(query, [table, colOne, colTwo, valOne, valTwo], (err, result) => {
      if (err) {
        throw err;
      }
      console.log('added');
      cb(result);
    });
  },

  updateOne(change,answer, cb) {
    const query = 'UPDATE burgers SET devoured = ? WHERE id = ?';
    connection.query(query, [change, answer], (err, result) => {
      if (err) {
        throw err;
      }
      console.log('updated');
      cb(result);
    });
  },


};

module.exports = orm;
