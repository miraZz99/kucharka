
const express = require("express")
const valid = require("../validace/validace")
const db = require("../databaze/databaze");
const fs = require("fs")
const router = express.Router()
let path = require('path');
const cors = require("cors");
const { log } = require("console");
require('dotenv/config');
router.use(cors({
    origin: "http://localhost:3000"
}));

router.post('/recipe', cors(), (req, res) => {

        let array = {
            name: req.body.name,
            description: req.body.description,
            ingrediences: req.body.ingredients,
            preparation: req.body.preparation,
            difficulty: req.body.difficulty,
            author: req.body.author,
        }
        console.log(array);

        // const { error } = valid.validateRecipe(array);
        // if (error) {
        //     res.status(400).send(error.details[0].message);
        //     console.log(error.details[0].message);
        // } else {
        //     console.log(array);
        //     // db.Recipe.create(array)
        //     //     .then(result => res.send(result))
        //     //     .catch(err => console.log(err))
        // }
        

    
}
);
router.post("/recipe/find",cors(),(req,res)=>{
try {
  
    db.Recipe.find ({name: RegExp(req.body.name)})
    .then (result => res.send(result))
} catch (error) {
   
    res.status(404).send("Bad request"+ error )
}
})
module.exports = router