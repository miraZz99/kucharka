const express = require("express");
const valid = require("../validace/validace");
const db = require("../databaze/databaze");
const fs = require("fs");
const router = express.Router();
const multer = require("multer");

let path = require("path");
const cors = require("cors");

require("dotenv/config");
router.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const storage = multer.diskStorage({
  destination: "./server/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/recipe/create", cors(), upload.single("image"), (req, res) => {
  let array = {
    name: req.body.name,
    description: req.body.description,
    ingrediences: JSON.parse(req.body.ingredients),
    preparation: req.body.preparation,
    difficulty: req.body.difficulty,
    author: req.body.author,
    image: req.file.filename,
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
    db.Recipe.findByIdAndDelete(idRecipe).then((result) => {
      fs.unlinkSync(path.join(__dirname, `../uploads/${result.image}`));
      res.send(result._id);
    });
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
router.post(
  "/recipe/update",
  cors(),
  upload.single("image"),
  async (req, res) => {
    let array = {
      name: req.body.name,
      description: req.body.description,
      ingrediences: JSON.parse(req.body.ingredients),
      preparation: req.body.preparation,
      difficulty: req.body.difficulty,
      author: req.body.author,
      image: req.file?.filename,
    };

    const { error } = valid.validateRecipe(array);
    if (error) {
      res.status(400).send(error.details[0].message);
      console.log(error.details[0].message);
    } else {
      try {
        const recepi = await db.Recipe.findById(req.body._id);
        fs.unlinkSync(path.join(__dirname, `../uploads/${recepi.image}`));
        db.Recipe.findByIdAndUpdate(req.body._id, array, { new: true })
          .then((result) => res.json(result))
          .catch((err) => console.log(err));
      } catch (error) {
        res.status(400).send("Recepi delete error");
      }
    }
  }
);

module.exports = router;
