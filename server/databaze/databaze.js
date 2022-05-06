const { string, number } = require('joi');
const mongoose = require('mongoose')

const url = 'mongodb+srv://admin:132435Andrej@cluster0.hqfl9.mongodb.net/CookBook?retryWrites=true&w=majority'


  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Could not connect to MongoDB... ', error));
    

const recipeSchema = new mongoose.Schema({
    name: String,
    description:String,
    preparation: String, 
    difficulty: String,
    author:String,
    
    ingrediences: Array,
    evaluated: {
        type : Number,
        default: 0
    },

    dateAdded: {
        type: Date,
        default: Date.now
    }
});
const Recipe = mongoose.model("recipe", recipeSchema);


module.exports.Recipe = Recipe
