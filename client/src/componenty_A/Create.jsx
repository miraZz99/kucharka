import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListData from "./ListData";
import { Popup, Popupwin } from '../components';



export default function Create(props) {

  const [values, setValues] = useState({
    name: "",
    ingrediences: "",
    preparation: "",
    evaluated: "",
    difficulty: "",
    author: "",
  })
  const [input, setInput] = useState([])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const handleFormSubmit = () => {
    console.log("Create");
    setInput([values])
    axios.post(`http://localhost:8080/recipe`, values)
      .then(response =>response.data)
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <Popupwin name={values.name} ingrediences={values.ingrediences}
        preparation={values.preparation}
        evaluated={values.evaluated}
        difficulty={values.difficulty}
        author={values.author}
        napln={handleChange}
        create={handleFormSubmit}
        input ={input}
      />
      
      
        

    </div>
  )
}


