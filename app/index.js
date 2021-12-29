const express = require("express");
const random_name = require("node-random-name");
const app = express();
const port = 3000;
const path = require("path");
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "desafio-node-db",
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let mysql = require("mysql");
let connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('${random_name({
  first: true,
})}')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  
  let people = [];
  let connection = mysql.createConnection(config);
  const sql = `SELECT * from people`;
  
  connection.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }
    people = JSON.parse(JSON.stringify(result));
    res.render("index", { people });
  });
  
  connection.end(); 
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
