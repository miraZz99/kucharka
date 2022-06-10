const express = require("express");

const db = require("../databaze/databaze");
const cors = require("cors");
const router = express.Router();

//#region [cors]
router.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//#endregion

//#region [/recept/list]
router.get("/recipe/list", cors(), (req, res) => {
  const data = db.Recipe.find().then((result) => {
    res.json(result);
  });
});
//#endregion

//#region [/rating/list/:id]
router.get("/rating/list/:id", cors(), (req, res) => {
  const data = db.Recipe.findById(req.params.id).then((result) => {
    res.json(result.evaluated);
  });
});
//#endregion

//#region [/recipe/list/details/:id]
router.get("/recipe/list/details/:id", cors(), (req, res) => {
  const data = db.Recipe.findById(req.params.id).then((result) => {
    res.json(result);
  });
});
//#endregion

//#region [/recipe/update/:id]
router.get("/recipe/update/:id", cors(), (req, res) => {
  const data = db.Recipe.findById(req.params.id).then((result) => {
    res.send(result);
  });
});
//#endregion
module.exports = router;
