const orm = require('../config/orm');

const burger = {
  all(cb) {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },

  create(name, cb) {
    orm.insertOne('burgers', 'burger_name', 'devoured', name, false, cb);
  },

  update(id, cb) {
    orm.updateOne(true, id, cb);
  },
};

module.exports = burger;
