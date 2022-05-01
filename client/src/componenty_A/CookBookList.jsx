import React, { useEffect, useState } from "react";
import axios from 'axios'
import ListData from "./ListData";



import Navbar from "../components/navbar/Navbar";





export default function CookBookList(props){
    const [books, setBooks] = useState([])
    const [create,setCreate]=useState(true)
   

    const [find,setFind]=useState({
		name:""
	})
	const [vysledek,setVysledek]=useState([])
	

	const finded = (event)=>{
		setFind( {...find,[event.target.name] : event.target.value})
	}

	function fidnPost (){
        setResult(true)
        setRec(false)
		axios.post("http://localhost:8080/recipe/find",find)
		.then(response => setVysledek(response.data))
		.catch((error) => console.log(error));
        setFind( {find,name : ""})
        setCreate(!create)
	}
    const [rec, setRec] = useState(false)
    const [result, setResult] = useState(false)

    const buttnRecipe = () => {
       setRec(!rec);
     }
  

    const getRecipe = ()=>{
        buttnRecipe()
        setResult(false)
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
            
             <Navbar  recipe = {getRecipe} search ={fidnPost} find={finded} addRecipe={addRecepi}  >
            
             </Navbar>
           
     

              {result&&
                  <ListData  books = {vysledek}  setBooks = {setBooks} addRecepi={addRecepi}/>
                  }
                

       

      
       
           
              {rec&&
                  <ListData  books = {books} setBooks = {setBooks}/>
                  }
                
  

      

        </div>
        
    )
                }
    
   
