const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'j0t0qmso9cukfbwb',
  password: process.env.PASSWORD,
  database: 'x4n4xv4kx6zw3c4h',
});


connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
