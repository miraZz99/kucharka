const express = require("express");
const valid = require("../validace/validace");
const db = require("../databaze/databaze");
const fs = require("fs");
const router = express.Router();
let path = require("path");
const cors = require("cors");
const { log } = require("console");
const { func } = require("joi");
require("dotenv/config");
router.use(
  cors({
    origin: "http://localhost:3000",
  })
);

router.post("/recipe/create", cors(), (req, res) => {
  let array = {
    name: req.body.name,
    description: req.body.description,
    ingrediences: req.body.ingredients,
    preparation: req.body.preparation,
    difficulty: req.body.difficulty,
    author: req.body.author,
  };

  const { error } = valid.validateRecipe(array);
  if (error) {
    res.status(400).send(error.details[0].message);
    console.log(error.details[0].message);
  } else {
    db.Recipe.create(array)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  }
});
router.post("/recipe/find", cors(), (req, res) => {
  try {
    db.Recipe.find({ name: RegExp(req.body.name) }).then((result) =>
      res.send(result)
    );
  } catch (error) {
    res.status(404).send("Bad request" + error);
  }
});
router.post("/recipe/delete", cors(), (req, res) => {
  let idRecipe = req.body;

  try {
    db.Recipe.findByIdAndDelete(idRecipe).then((result) =>
      res.send(result._id)
    );
  } catch (error) {
    res.status(404).send("Bad request" + error);
  }
});

router.post("/rating", cors(), (req, res) => {
  let array = {
    _id: req.body._id,
    evaluated: Number(req.body.evaluated),
  };
  let avg = {
    evaluated: 0,
  };

  db.Recipe.findById(array._id).then((response) => {
    avg.evaluated = Math.round(response.evaluated + array.evaluated) / 2;

    db.Recipe.findByIdAndUpdate(
      { _id: array._id },
      { evaluated: avg.evaluated }
    )
      .then((result) => res.json(result.evaluated))
      .catch((err) => {
        res.send("Nepodařilo se uložit recept!");
      });
  });
});

module.exports = router;
