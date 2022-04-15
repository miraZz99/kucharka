const express = require("express")
const valid = require("../validace/validace")
const db = require("../databaze/databaze");
const router = express.Router()


router.get('/recipe/list', (req, res) => {
  
    const data =  db.Recipe.find().then((result)=> {
       
        
        
       res.json(
             {result}
       )
       
       
    })
});

       module.exports = router