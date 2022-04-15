
const express = require("express")
const valid = require("../validace/validace")
const db = require("../databaze/databaze");
const router = express.Router()

router.post('/recipe',  (req, res) => {
    const { error } = valid.validateRecipe(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        db.Recipe.create(req.body)
        .then(result => { res.json(result) })
        .catch(err => { res.send("Nepodařilo se uložit recept!") });
      
    }
});
module.exports = router