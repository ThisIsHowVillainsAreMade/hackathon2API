const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 7777;

app.use(cors("*"));

app.use("/articles", express.static(path.join(__dirname, "./articles")));

const articles = [
  {
    id: 1,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 2,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 3,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 4,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 5,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 6,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 7,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 8,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 9,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 10,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 11,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 12,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 13,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 14,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 15,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 16,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 17,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 18,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 19,
    item: "VOID",
    img: "",
    alt: "",
  },
  {
    id: 20,
    item: "VOID",
    img: "",
    alt: "",
  },
];

app.get("/", (req, res) => {
  res.send("l'API est en ligne.");
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.listen(
  port,
  console.info(`Le Port ${port} est en écoute sur http://localhost:${port} .`)
);
