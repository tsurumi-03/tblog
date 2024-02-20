const express = require('express');
//const mysql = require('mysql2');

const app = express();

/*
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '263263-Trmtrm',
  database: ''
});

//MYSQLとの接続が成功したか確認
connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });

app.get('/', (req, res) => {
    res.render('top.ejs');
}
);
*/


console.log("Heloo World");

app.listen(proess.env.PORT || 3000);