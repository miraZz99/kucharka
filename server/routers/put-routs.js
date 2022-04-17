const express = require("express")
const router = express.Router()
const valid = require("../validace/validace")
const db = require("../databaze/databaze");


router.put('/recipe/:id', (req, res) => {
    ;
        const id = req.params.id
        const recip = db.Recipe.findById(id)
        console.log(id);
        if (!recip) {
            res.status(404).send("Recept nebyl nalezen.")
            return;
        }
        const { error } = valid.validateRecipe(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
        } else {
          db.Recipe.updateOne (req.body)
             .then(() => { res.json(req.body) })
            .catch(err => { res.send("Nepodařilo se uložit recept!") });
            console.log(req.body);
            
        }
    })
    module.exports = router