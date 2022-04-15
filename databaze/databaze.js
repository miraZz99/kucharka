const mongoose = require('mongoose')

const url = 'mongodb+srv://admin:132435Andrej@cluster0.hqfl9.mongodb.net/CookBook?retryWrites=true&w=majority'


  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Could not connect to MongoDB... ', error));
    

const recipeSchema = new mongoose.Schema({
    name: String,
    ingrediences: [String],
    preparation: Number, 
    evaluated: Number,
    difficulty: String,
    registration_date: Date ,
    author: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
    
    // dateAdded: {
    //     type: Date,
    //     default: Date.now
    // }
});
const Recipe = mongoose.model("recipe", recipeSchema);


module.exports.Recipe = Recipe
