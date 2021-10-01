const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// app.post("/recebecad", (req, res) => {
//   const { nome, email } = req.body;
//   const retorno = { nome: nome, email: email };
//   res.send(retorno);
//   //   res.render("retorna", { nome: retorno.nome, email: retorno.email });
// });

app.post("/recebecad", (req, res) => {
  const { numero, nome } = req.body;
  const pokedex = [
    {
      numero: 1,
      nome: "Onyx",
      tipo: "Pedra/Terrestre",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
      descricao:
        "À medida que cava no solo, ele absorve muitos objetos duros. É isso que torna seu corpo tão sólido.",
      altura: 8.8,
      peso: 210,
      categoria: "Cobra de Pedra",
      habilidade: "Cabeçada de Pedra",
    },
  ];
  res.render("retorna", { pokedex: pokedex });
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
