import React, { useState } from "react";
import "./popupwin.css";
import { Popup } from "../../components";
// import "./ErrorForm.js";

import { Alert } from "@mui/material";

const Popupwin = (props) => {
  const {
    ingredients,
    setIngredients,
    values,
    setValues,
    alert,
    setAlert,
    isAdmin,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    props.setInput("");
    setIngredients(ingredients, [{ raw_materials: "", count: "", unit: "" }]);

    //tadyyy

    setValues({
      ...values,
      name: "",
      preparation: "",
      difficulty: "",
      description: "",
      author: "",
    });
    setAlert(false);
  };
  
  const remove = () => {
    const newIngredients = [...ingredients];
    console.log(newIngredients);
    if (newIngredients.length != 1) {
      newIngredients.splice(newIngredients, 1);
      setIngredients(newIngredients);
    }
  };

  const add = () => {
    const newIngredients = [
      ...ingredients,
      {
        raw_materials: "",
        count: "",
        unit: "",
      },
    ];
    setIngredients(newIngredients);
  };
  const handleChange = (ingredient, index) => (event) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1, {
      ...ingredient,
      [event.target.name]: event.target.value,
    });
    setIngredients(newIngredients);
  };

  

  return (
    <div className="popupwin">
      <div className="popupwin-button">
        <input
          href="recipe"
          type="button"
          value="Create"
          onClick={togglePopup}
        />
      </div>
      <div className="popupwin-content">
        {isOpen && (
          <Popup
            alert={alert}
            content={
              <>
                {/* <h2>Create your recipe</h2> */}
                <div className="Vypis">
                  <div className="zkouska">
                    <form>
                      <div className="popupwin-content__recipename">
                        <label htmlFor="name">Recipe name</label>
                        <input
                          className="input"
                          type="text"
                          id="name"
                          name="name"
                          value={props.name}
                          onChange={props.napln}
                          required
                        />
                        <p class="error name-error"></p>
                      </div>
                      <div className="popupwin-content__date">
                        <p>
                          <label htmlFor="date-input">Preparation</label>

                          <input
                            className="input"
                            id="time-input"
                            type="time"
                            name="preparation"
                            value={props.preparation}
                            onChange={props.napln}
                            required
                          />
                        </p>
                      </div>
                      <div className="recipe">
                        <div className="popupwin-content__photo">
                          {ingredients.map((ingredient, index) => (
                            <div key={index} className="neco">
                              <p id="raw_materials">
                                <label htmlFor="number-input">
                                  Raw_materials
                                </label>
                                <input
                                  id="number-input"
                                  className="input"
                                  type="text"
                                  name="raw_materials"
                                  value={ingredients.raw_materials}
                                  onChange={handleChange(ingredient, index)}
                                  required
                                />
                              </p>
                              <p className="widht" id="count">
                                <label htmlFor="number-input">Count</label>
                                <input
                                  type="number"
                                  name="count"
                                  value={ingredients.count}
                                  onChange={handleChange(ingredient, index)}
                                  required
                                />
                              </p>
                              <p id="unit">
                                <label htmlFor="number-input">Unit</label>
                                <select
                                  id="select"
                                  name="unit"
                                  value={ingredients.unit}
                                  onChange={handleChange(ingredient, index)}
                                  required
                                >
                                  <option></option>
                                  <option value="g">g</option>
                                  <option value="ks">ks</option>
                                  <option value="ml">ml</option>
                                  <option value="lžička">lžička</option>
                                </select>
                              </p>
                              <div className="add">
                                <i
                                  className="fa-solid fa-plus"
                                  onClick={add}
                                ></i>
                              </div>
                              <div className="delete">
                                <i
                                  className="fa-solid fa-trash"
                                  onClick={remove}
                                >
                                  {" "}
                                </i>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="popupwin-content__photo"></div>
                      </div>

                      <p>Difficulty</p>

                      <select
                        name="difficulty"
                        value={props.difficulty}
                        onChange={props.napln}
                        required
                      >
                        <option></option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>

                      <p>Description of recipe</p>

                      <textarea
                        name="description"
                        value={props.description}
                        onChange={props.napln}
                        required
                      ></textarea>

                      <p>Author</p>
                      <input
                        type="text"
                        name="author"
                        value={props.author}
                        onChange={props.napln}
                        required
                      ></input>

                      <input
                        type="submit"
                        value="Create"
                        onClick={props.create}
                      ></input>
                    </form>
                  </div>
                  <div className="alert">
                    {alert &&<Alert onClose={() => setAlert(false)} severity="success"> Recept byl vytvořen </Alert>}
                  </div>
                </div>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Popupwin;
