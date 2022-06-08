import React, { useEffect, useState } from "react";
import axios from "axios";

import { Popupwin } from "../components";

export default function Create(props) {
  // const [zkouska, setZkouska] = useState();

  const { addRecipe, isAdmin } = props;
  const [alert, setAlert] = useState(false);
  const [image, setImage] = useState("");

  const [ingredients, setIngredients] = useState([
    {
      raw_materials: "",
      count: "",
      unit: "",
    },
  ]);

  const [values, setValues] = useState({
    name: "",
    description: "",
    preparation: "",
    difficulty: "",
    author: "",
  });

  const [input, setInput] = useState([]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const imageChange = (event) => {
    setImage(...image, event.target.files[0]);
  };

  const handleFormSubmit = () => {
    setInput([values]);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append(`ingredients`, JSON.stringify(ingredients));
    formData.append(`image`, image);

    axios

      .post(`http://localhost:8080/recipe/create`, formData)
      .then((response) => addRecipe(response.data))
      .catch((error) => console.log(error));

    setValues({
      ...values,
      name: "",
      preparation: "",
      difficulty: "",
      description: "",
      author: "",
    });
    setAlert(true);

    setIngredients([
      {
        raw_materials: "",
        count: "",
        unit: "",
      },
    ]);
    setImage("");
  };

  return (
    <div>
      <Popupwin
        name={values.name}
        description={values.description}
        preparation={values.preparation}
        difficulty={values.difficulty}
        author={values.author}
        ingredients={ingredients}
        setIngredients={setIngredients}
        napln={handleChange}
        create={handleFormSubmit}
        input={input}
        setInput={setInput}
        values={values}
        setValues={setValues}
        alert={alert}
        setAlert={setAlert}
        isAdmin={isAdmin}
        // picture={image.picture}
        imageChange={imageChange}
        // zkouska={zkouska}
      />
    </div>
  );
}
