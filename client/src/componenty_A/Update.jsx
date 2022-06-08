import axios from "axios";
import { Popup } from "../components";
import React from "react";
import { useState } from "react";
import "../components/popupwin/popupwin.css";
import Image from "./Image";

export default function Update(props) {
  const { id, updateRecepi } = props;

  const [update, setUpdate] = useState({});
  const [image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [ingredients, setIngredients] = useState([
    {
      raw_materials: "",
      count: "",
      unit: "",
    },
  ]);

  const handleChange = (ingredient, index) => (event) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1, {
      ...ingredient,
      [event.target.name]: event.target.value,
    });
    setIngredients(newIngredients);
  };

  function chanche(event) {
    setUpdate({ ...update, [event.target.name]: event.target.value });
  }

  const imageChange = (event) => {
    setImage(...image, event.target.files[0]);
  };

  function open() {
    setIsOpen(!isOpen);
    axios
      .get(`http://localhost:8080/recipe/update/${id}`)
      .then((response) => {
        setUpdate(response.data);
        setIngredients(response.data.ingrediences);
      })
      .catch((error) => console.log(error));
  }
  function create() {
    const formData = new FormData();
    Object.entries(update).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append(`ingredients`, JSON.stringify(ingredients));
    formData.append(`image`, image);
    axios
      .post(`http://localhost:8080/recipe/update`, formData)
      .then((response) => updateRecepi(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div onClick={open}>
        <i className="fa-solid fa-pen  fa-lg"></i>{" "}
      </div>
      {isOpen && (
        <Popup
          alert={alert}
          content={
            <>
              <div className="Vypis">
                <div className="zkouska">
                  <div className="popupwin-content__recipename">
                    <form>
                      <p>
                        <label htmlFor="name">Recipe name</label>
                        <input
                          className="input"
                          type="text"
                          id="name"
                          placeholder="Zadejte jméno"
                          name="name"
                          value={update.name}
                          onChange={(event) => chanche(event)}
                        />
                      </p>
                    </form>
                  </div>
                  <div className="popupwin-content__date">
                    <form>
                      <p>
                        <label htmlFor="date-input">Preparation</label>

                        <input
                          className="input"
                          id="time-input"
                          type="number"
                          min="0"
                          name="preparation"
                          placeholder="Zadejte dobu příptavy v minutach"
                          value={update.preparation}
                          onChange={(event) => chanche(event)}
                        />
                      </p>
                    </form>
                  </div>
                  <div className="recipe">
                    <div className="popupwin-content__photo">
                      {ingredients?.map((ingredient, index) => (
                        <div key={index} className="neco">
                          <p id="raw_materials">
                            <label htmlFor="number-input">Raw_materials</label>
                            <input
                              id="number-input"
                              className="input"
                              type="text"
                              name="raw_materials"
                              value={ingredient.raw_materials}
                              onChange={handleChange(ingredient, index)}
                            />
                          </p>
                          <p className="widht" id="count">
                            <label htmlFor="number-input">Count</label>
                            <input
                              type="number"
                              name="count"
                              min={0}
                              value={ingredient.count}
                              onChange={handleChange(ingredient, index)}
                            />
                          </p>
                          <p id="unit">
                            <label htmlFor="number-input">Unit</label>
                            <select
                              id="select"
                              name="unit"
                              value={ingredient.unit}
                              onChange={handleChange(ingredient, index)}
                            >
                              <option></option>
                              <option value="g">g</option>
                              <option value="ks">ks</option>
                              <option value="ml">ml</option>
                              <option value="lžička">lžička</option>
                            </select>
                          </p>
                        </div>
                      ))}

                      <form></form>
                    </div>
                    <div className="popupwin-content__photo">
                      <form></form>
                    </div>
                  </div>
                  <form>
                    <p>Difficulty</p>

                    <select
                      name="difficulty"
                      value={update.difficulty}
                      onChange={(event) => chanche(event)}
                    >
                      <option></option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </form>
                  <form>
                    <p>Description of recipe</p>

                    <textarea
                      name="description"
                      value={update.description}
                      onChange={(event) => chanche(event)}
                    ></textarea>
                  </form>
                  <form>
                    <p>Author</p>
                    <input
                      type="text"
                      name="author"
                      value={update.author}
                      onChange={(event) => chanche(event)}
                    ></input>
                    <Image imageChange={imageChange}></Image>
                  </form>
                  <input type="submit" value="Create" onClick={create}></input>
                </div>
              </div>
            </>
          }
          handleClose={open}
        />
      )}
    </div>
  );
}
