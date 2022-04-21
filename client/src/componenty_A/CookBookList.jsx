import React, { useEffect, useState } from "react";
import axios from 'axios'
import ListData from "./ListData";
import Find from "./Find";
import Create from "./Create";
import Navbar from "../components/navbar/Navbar";



export default function CookBookList(props){
    
    const [books, setBooks] = useState([])
    const [create,setCreate]=useState(false)
    const [find,setFind]=useState(false)


   const getRecipe = ()=>{
    
    setFind(false)
    setCreate(false)
        axios.get(`http://localhost:8080/recipe/list`)
        .then (response=>setBooks(response.data))
        .catch((error) => console.log(error));
   }
   
   function addRecepi(newRecipi){
       setBooks([...books,newRecipi])
   }
   function cre(){
    setCreate(true)
   }
   function fin(){
    setFind(true)
   } 
  
     
    return(
      
        <div className="App" >
             <Navbar  recipe = {getRecipe} />
        
           {
           <Find/>
}
          <div > 

              {/* <br/>
              <br/>
              <button onClick={cre}  >create</button>
              <br/>
              <br/>
              <button onClick={fin}  >Find</button>
              <br/>
              <br/> */}
      
             <div >
             {create?
           <Create addRecipi = {addRecepi}/>:console.log()}
              {books?
                  <ListData  books = {books}/>: console.log()
                  }
                
              </div>
           </div>

      

        </div>
        
    )
                }
    
   
