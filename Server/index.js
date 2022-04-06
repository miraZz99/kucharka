const express = require("express")
const valid = require("./validace/validace")
const db = require("./databaze/databaze")
const app = express()
app.use(express.json());


app.get('/recipe', (req, res) => {
    db.Recipe.find().then((result)=> res.json(result))
});


app.post('/recipe', (req, res) => {
    const { error } = valid.validateRecipe(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        db.Recipe.create(req.body)
        .then(result => { res.json(result) })
        .catch(err => { res.send("Nepodařilo se uložit recept!") });
      
    }
});
app.put('/recipe/:id', (req, res) => {
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

app.delete('/recipe/:id', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id)
    
        .then(result => {
            if (result)
                res.json(result);
            else
                res.status(404).send("Film s daným id nebyl nalezen!");
        })
        .catch(err => { res.send("Chyba při mazání filmu!") });
});


         app.listen(3000, () => console.log("Listening on port 3000...."));