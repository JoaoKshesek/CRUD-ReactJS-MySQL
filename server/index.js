const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "crud",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { color } = req.body;
  const { style } = req.body;

  let mysql = "INSERT INTO wines ( name, color, style) VALUES (?, ?, ?)";
  db.query(mysql, [name, color, style], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { color } = req.body;
  const { style } = req.body;

  let mysql =
    "SELECT * from wines WHERE vines = ? AND color = ? AND style = ?";
  db.query(mysql, [name, color, style], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM wines";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { color } = req.body;
  const { style } = req.body;
  let mysql = "UPDATE wines SET name = ?, color = ?, style = ? WHERE id = ?";
  db.query(mysql, [name, color, style, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM wines WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001"); 
});
