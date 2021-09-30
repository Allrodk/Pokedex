const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   res.send("Pokedex");
// });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/recebecad", (req, res) => {
  const { nome, email } = req.body;
  res.send({ nome: nome, email: email });
  //   res.send("Funcionando");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
