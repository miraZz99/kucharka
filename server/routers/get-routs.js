const express = require("express")
const valid = require("../validace/validace")
const db = require("../databaze/databaze");
const cors = require("cors")
const router = express.Router()
router.use(cors({
    origin: "http://localhost:3000"
  }));


router.get('/recipe/list',cors() , (req, res) => {
    
    const data =  db.Recipe.find().then((result)=> {
       res.json(result)

    })

});


       module.exports = router