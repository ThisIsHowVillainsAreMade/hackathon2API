require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 7777;

app.use(cors("*"));

app.use("/articles", express.static(path.join(__dirname, "./articles")));
app.use("/images", express.static(path.join(__dirname, "assets")));


const articles = [
  {
    id: 1,
    item: "Fusil Mitrailleur de Tyr",
    img: "./images/ak47viking.png",
    alt: "fusil mitrailleur runique",
    price: "630.99 DC",
    description:
      "Un fusil mitrailleur amélioré doté de la précision et de la puissance des armes du futur, faisant de son porteur le champion des champs de bataille. Vos arbalettes peuvent finir au placard ou pour alimenter le feu de la maison en hiver !",
  },
  {
    id: 2,
    item: "Forge de Muspell",
    img: "./images/barbecue-on-grey-background-32k-uhd-ultra-realistic-style-54336279.png",
    alt: "barbecue",
    price: "44.99 DC",
    description:
      "Un autel de feu pour préparer des banquets, où la viande des chasses les plus nobles est cuite à la perfection, dignement fumée sous le regard des Ases. On l'appelle le barbecue, et non le barbe-cul.",
  },
  {
    id: 3,
    item: "Javelot de Thor",
    img: "./images/bazooka.png",
    alt: "bazooka avec des runes",
    price: "859.99 DC",
    description:
      "Ceci est un instrument de guerre céleste, façonné dans les ateliers d'Idavoll, qui lance une pluie de flèches enflammées avec la rapidité d'un torrent. Chaque flèche est guidée par la lumière de Balder, assurant que la justice soit rendue sur le champ de bataille.",
  },
  {
    id: 4,
    item: "Drakkar d'Aegir",
    img: "./images/drakkar.png",
    alt: "enorme drakkar viking",
    price: "148999.99 DC",
    description:
      "Un navire légendaire, doté du souffle des géants, traversant les mers plus vite que le coursier de Sleipnir, apportant gloire et richesse. Attention: cette petite merveille n'est pas pour les fragiles !",
  },
  {
    id: 5,
    item: "Robe de l'Étoile du Nord ",
    img: "./images/dress-on-a-grey-background-32k-uhd-ultra-realistic-style-328211277.png",
    alt: "petite robe noire",
    price: "29.99 DC",
    description:
      "Tissée avec des fibres inconnues dans votre monde, cette robe allie confort et élé",
  },
  {
    id: 6,
    item: "Baume de Sif",
    img: "./images/gradient-lotion-on-a-grey-background-32k-uhd-ultra-realistic-style-992581392.png",
    alt: "lotion pour lustrer les crânes chauves",
    price: "19.99 DC",
    description:
      "Inspiré par la légendaire chevelure dorée de Sif, ce baume miraculeux est conçu pour les guerriers et les sages qui ont perdu leur crinière au combat ou au fil du temps. Appliqué sur le sommet, il promet de raviver la vigueur et la splendeur d'une chevelure digne des plus grands héros des sagas.",
  },
  {
    id: 7,
    item: "Coffret d'Idunn",
    img: "./images/grinder.png",
    alt: "boîte avec des motifs vikings",
    price: "27.99 DC",
    description:
      "Un écrin précieux forgé à la lumière des étoiles d'Asgard, destiné à abriter les joyaux et amulettes les plus sacrés. Chaque compartiment est bénit par Idunn, gardienne de la jeunesse et de la beauté, assurant que les trésors qu'il contient demeurent éternellement resplendissants, comme les pommes d'or qu'elle garde.",
  },
  {
    id: 8,
    item: "Pistolet Runique de Freyr",
    img: "./images/gunViking.png",
    alt: "pistolet hache",
    price: "1789.99 DC",
    description:
      " Un arme d'une finesse inégalée, ornée de runes sacrées, offrant la protection et la force du dieu Freyr. Sa détonation ressemble au tonnerre, faisant de son porteur le plus redoutable des guerriers sur le champ de bataille.",
  },
  {
    id: 9,
    item: "Hache de Skírnir",
    img: "./images/hache.png",
    alt: "hache",
    price: "114.99 DC",
    description:
      "Forgée dans les flammes du futur, cette hache ne perd jamais son tranchant, idéale pour les expéditions lointaines ou pour impressionner au Thing.",
  },
  {
    id: 10,
    item: "Char de Loki",
    img: "./images/kebab.png",
    alt: "camion frites kebab salade tomates oignons",
    price: "3799.99 DC",
    description:
      "Un char magique qui délivre des mets dignes d'un festin des dieux, attirant les foules et apportant prospérité à votre clan. Viandes, frites et sauces non fournies.",
  },
  {
    id: 11,
    item: "Souffle de Surtr ",
    img: "./images/lance-feu.png",
    alt: "lance flammes",
    price: "795.99 DC",
    description:
      "Un outil béni par le feu des géants, capable de repousser les ennemis les plus redoutables avec un souffle de flammes.",
  },
  {
    id: 12,
    item: "Baume de Frigg",
    img: "./images/lipstick-on-grey-background-with-runs-viking-32k-uhd-ultra-realistic-style-535674730.png",
    alt: "rouge à levre",
    price: "37.99 DC",
    description:
      "Un onguent pour les lèvres, donnant l'éclat du crépuscule nordique, réservé aux femmes les plus estimées des clans.",
  },
  {
    id: 13,
    item: "Calice d'Odin",
    img: "./images/machineAlaverLePAL.png",
    alt: "machine a laver viking",
    price: "315,99 DC",
    description:
      "Un calice enchanté qui, en un cycle de lune, purifie vos vêtements des souillures de la bataille, les laissant dignes pour le banquet des dieux.",
  },
  {
    id: 14,
    item: "Élixir de Heimdall",
    img: "./images/medical-spray-grey-background-with-runs-viking-32k-uhd-ultra-realistic-style-116990779.png",
    alt: "spray antiseptique",
    price: "31.99 DC",
    description:
      "Une potion rare, quelques gouttes sur vos mains et vous serez protégé des malédictions invisibles, comme le veilleur des dieux.",
  },
  {
    id: 15,
    item: "Cape de Dvalin",
    img: "./images/mouton.png",
    alt: "moumoute pour chauves",
    price: "499.99 DC",
    description:
      " Une peau de mouton tissée par les nains, offrant chaleur et protection contre les morsures du vent du nord.",
  },
  {
    id: 16,
    item: "Essence de Idunn",
    img: "./images/perfume-grey-background-with-runs-viking-32k-uhd-ultra-realistic-style-786186131.png",
    alt: "parfum pour viking puant",
    price: "91.99 DC",
    description:
      "Un parfum capturant l'essence des jardins d'Asgard, rendant celui qui le porte irrésistible aux yeux des dieux et des mortels.",
  },
  {
    id: 17,
    item: "Disque de Freyr ",
    img: "./images/pizza-on-grey--32k-uhd-ultra-realistic-style-150336464.png",
    alt: "pizza viking",
    price: "9.99 DC",
    description:
      "Un festin divin, cuit par les rayons du soleil, garni de mets exotiques, prêt à être offert en sacrifice ou partagé en banquet",
  },
  {
    id: 18,
    item: "Héraut des Sagas ",
    img: "./images/radio-grey-background-with-runs-viking-32k-uhd-ultra-realistic-style-397056440.png",
    alt: "radio viking",
    price: "49.99 DC",
    description:
      "Un mystique coffret qui capture les voix des scaldes de terres lointaines, récitant des sagas et des nouvelles sans la présence d'un barde.",
  },
  {
    id: 19,
    item: "Charrette de Forseti",
    img: "./images/sac.png",
    alt: "sac avec des roulettes",
    price: "349.99 DC",
    description:
      "Inspiré par le dieu de la justice et de la paix, ce sac sur roues est un compagnon fidèle pour le voyageur. Facile à manier même sur les terrains les plus ardus, il porte vos biens et trésors avec la sérénité d'un fjord calme, garantissant que chaque fardeau est équilibré avec sagesse et facilité.",
  },
  {
    id: 20,
    item: "Bâtonnet des Dents d'Yggdrasil",
    img: "./images/toothbrush-on-a-grey-background-32k-uhd-ultra-realistic-style-513486563.png",
    alt: "Brosse à dents",
    price: "9.99 DC",
    description:
      "Inspiré par l'arbre du monde, ce bâtonnet magique préserve la force de vos mâchoires pour déchiqueter le festin de la victoire.",
  },
  {
    id: 21,
    item: "QuackNade",
    img: "./images/QuackNade.png",
    alt: "grenade canard, notre produit phare",
    price: "199.99 DC",
    description:
      "PRODUIT PHARE ! Une création espiègle du dieu de la malice, ce caneton apparemment inoffensif cache un secret explosif. Lancé parmi les ennemis, il se transforme en un éclat de fureur et de feu, semant chaos et destruction, comme le ferait Loki lui-même dans les rangs adverses..",
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
