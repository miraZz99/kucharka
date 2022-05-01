import React from 'react'

import axios from 'axios';

export default function DeleteRecipe  (props)  {
   

const {remove, setBooks,books} = props

const del =(remove)=>{
   let  newRecipes = books.filter(e => e._id != remove);
   setBooks(newRecipes);
}

function writeRecipeId(){

    axios.post(`http://localhost:8080/recipe/delete`,{_id:remove} )
    .then(response =>del(response.data))
    .catch((error) => console.log(error));
}





  return (
    <div>
        
      <i onClick={()=>{
     
          writeRecipeId()
          
          }} className="fa-solid fa-trash"></i>

    </div>
  )
}

