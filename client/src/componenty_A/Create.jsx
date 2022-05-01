import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {  Popupwin } from '../components';




export default function Create(props) {

  const[ingredients,setIngredients] = useState([{
    raw_materials: "",
  count: "",
  unit:"",
}])

  const [values, setValues] = useState({
    name: "",
    description: "",
    preparation: "",
    difficulty: "",
    author: "",
  })


  const [input, setInput] = useState([])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
 
  
 
  const handleFormSubmit = () => {

    setInput([values])
    axios.post(`http://localhost:8080/recipe`, {...values, ingredients})
      .then(response => response.data)
      .catch((error) => console.log(error));
    setValues({
      ...values, name: "",
      preparation: "",
      difficulty: "",
      description: "",
      author: "",

    })
    setIngredients([{
    raw_materials: "",
    count: "",
    unit:"",
  }])
 
  }
  return (
    <div>
      <Popupwin name={values.name} 
      description ={values.description}
        preparation={values.preparation}
        difficulty={values.difficulty}
        author={values.author}
        ingredients ={ingredients}
        setIngredients = {setIngredients}
        napln={handleChange}     
        create={handleFormSubmit}
        input={input}
        setInput={setInput}
        values = {values}
        setValues ={setValues}
      />
    </div>
  )
}
