const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
let message = "";
let pokedex = [
  {
    numero: "1",
    nome: "Onyx",
    tipo: "Pedra/Terrestre",
    imagem: "/img/1.png",
    descricao:
      "À medida que cava no solo, ele absorve muitos objetos duros. É isso que torna seu corpo tão sólido.",
    altura: "8.8",
    peso: "210",
    categoria: "Cobra de Pedra",
    habilidade: "Investida",
  },
  {
    numero: "2",
    nome: "Aerodactyl",
    tipo: "Pedra/Voador",
    imagem: "/img/2.png",
    descricao:
      "Este é um Pokémon feroz desde os tempos antigos. Aparentemente, mesmo a tecnologia moderna é incapaz de produzir um espécime perfeitamente restaurado.",
    altura: "1.8",
    peso: "59",
    categoria: "Fóssil",
    habilidade: "Mordida",
  },
  {
    numero: "3",
    nome: "Starmie",
    tipo: "Água/Psíquico",
    imagem: "/img/3.png",
    descricao:
      "Este Pokémon possui um órgão conhecido como núcleo. O órgão brilha em sete cores quando Starmie está liberando seus potentes poderes psíquicos.",
    altura: "1.1",
    peso: "80",
    categoria: "Misteriosa",
    habilidade: "Revóver D'água",
  },
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index", { pokedex: pokedex, message });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/novo", (req, res) => {
  message = "Pokemon cadastrado!";
  setTimeout(() => {
    message = "";
  }, 5000);

  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  res.render("detalhes", { pokemon: pokedex[id] });
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
