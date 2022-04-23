import React, { useEffect, useState } from "react";
import axios from 'axios'
import ListData from "./ListData";

import Create from "./Create";
import Navbar from "../components/navbar/Navbar";




export default function CookBookList(props){
    
   
    const [books, setBooks] = useState([])
    const [create,setCreate]=useState(true)
   

    const [find,setFind]=useState({
		name:""
	})
	const [vysledek,setVysledek]=useState([])
	

	const finded = (event)=>{
		console.log("ano klika to");
		setFind( {...find,[event.target.name] :event.target.value})
	}
	function fidnPost (){
        setViev(false)
        if (create){
		console.log("ano klika to");
		axios.post("http://localhost:8080/recipe/find",find)
		.then(response => setVysledek(response.data))
		.catch((error) => console.log(error));
        }
        setCreate(!create)
	}
    const getRecipe = ()=>{
        
        setFind(false)
        setCreate(false)
            axios.get(`http://localhost:8080/recipe/list`)
            .then (response=>setBooks(response.data))
            .catch((error) => console.log(error));
       }


       const [view, setViev] = useState(true)

const viewww = ()=>{

    if (view == true){
        getRecipe()
}
setViev(!view)



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
             <Navbar  recipe = {viewww} search ={fidnPost} find={finded} value={find.name}  />
        
           {
}
          <div > 

          <div>

<div>
      
</div>
<div >
              {vysledek?
                  <ListData  books = {vysledek}/>:console.log()
                  }
                
</div>
  
       
    </div>
      
             <div >
             
           
              {view?
                  <ListData  books = {books}/>:console.log("neotevira recept")
                  }
                
              </div>
           </div>

      

        </div>
        
    )
                }
    
   
