const express = require("express")
const router = express.Router()
const valid = require("../validace/validace")
const db = require("../databaze/databaze");
const runF = require("../databaze/databaze");

router.delete('/recipe/:id', (req, res) => {
    runF()
    db.Recipe.findByIdAndDelete(req.params.id)
    
        .then(result => {
            if (result)
                res.json(result);
            else
                res.status(404).send("Film s daným id nebyl nalezen!");
        })
        .catch(err => { res.send("Chyba při mazání filmu!") });
});

module.exports = router