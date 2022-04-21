import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListData from "./ListData";



export default function Create(props) {

  const [values, setValues] = useState({
    name: "",
    ingrediences: "",
    preparation: "",
    evaluated: "",
    difficulty: "",
    author: "",
  })
 const[input,setInput] =useState([])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const handleFormSubmit = () => {
    setInput([values])
    axios.post(`http://localhost:8080/recipe`, values)
      .then(response => props.addRecipi(response.data) )
      .catch((error) => console.log(error));
  }
  return (
    <div> 
      <h1>Recepty</h1>
      <br />
      <input type="text" placeholder="name" name='name' value={values.name} onChange={handleChange}></input>
      <br />
      <br />
      <input type="text" placeholder="ingrediences" name='ingrediences' value={values.ingrediences.value} onChange={handleChange} ></input>
  
      <br />
      <br />
      <input type="text" placeholder="preparation" name='preparation' value={values.preparation} onChange={handleChange}></input>
      <br />
      <br />
      <input type="text" placeholder="evaluated" name='evaluated' value={values.evaluated} onChange={handleChange}></input>
      <br />
      <br />
      <input type="text" placeholder="difficulty" name='difficulty' value={values.difficulty} onChange={handleChange} ></input>
      <br />
      <br />
      <input type="text" placeholder="author" name='author' value={values.author} onChange={handleChange}></input>
      <br />
      <br />
      <button onClick={handleFormSubmit}> Pridat</button>
<div>
      <ListData books = {input}/>

      </div>
    </div>
  )
}


