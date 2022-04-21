import React , {useState, useEffect} from "react";
import '../App.css';
import axios from 'axios'
import ListData from "./ListData";
import Navbar from "../components/navbar/Navbar";
import CookBookList from "./CookBookList";



export default function Find(){

	const [find,setFind]=useState({
		name:""
	})
	const [vysledek,setVysledek]=useState([])
	

	const finded = (event)=>{
		console.log("ano klika to");
		setFind( {...find,[event.target.name] :event.target.value})
	}
	function fidnPost (){
		console.log("ano klika to");
		axios.post("http://localhost:8080/recipe/find",find)
		.then(response => setVysledek(response.data))
		.catch((error) => console.log(error));
	}
	console.log(vysledek);
    return (
<div>
{/* <input type="text" placeholder="Find recipe" name="name" onChange={(event)=>finded(event)} value={find.name}></input>
<button type="button" onClick={fidnPost}>FIND</button> */}
<div>
{/* <Navbar search ={fidnPost} input ={finded}/> */}
</div>
<div >
              {vysledek?
                  <ListData  books = {vysledek}/>:alert("Nezadal jsi žadný recept")
                  }
                
</div>
  
       
    </div>
    )
}



