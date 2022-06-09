import React, { useState } from "react";
import "./popupwin.css";
import { Popup } from "../../components";
import Image from "../../componenty_A/Image";
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
    picture,
    imageChange,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    props.setInput("");
    // setIngredients(ingredients, [{ raw_materials: "", count: "", unit: "" }]);

    // setValues({
    //   ...values,
    //   name: "",
    //   preparation: "",
    //   difficulty: "",
    //   description: "",
    //   author: "",
    // });
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
                    <div className="popupwin-content__recipename">
                      <form>
                        <p>
                          <label
                            htmlFor="name-input"
                            style={{ color: "#1762A7" }}
                          >
                            Recipe name
                          </label>
                          <input
                            required
                            className="input"
                            type="text"
                            id="name"
                            placeholder="Enter name of the recipe"
                            name="name"
                            value={props.name}
                            onChange={props.napln}
                          />
                        </p>
                      </form>
                    </div>
                    <div className="popupwin-content__date">
                      <form>
                        <p>
                          <label htmlFor="date-input">Preparation</label>

                          <input
                            required
                            className="input"
                            id="time-input"
                            type="number"
                            min="0"
                            name="preparation"
                            placeholder="Enter time of preparation in minutes"
                            value={props.preparation}
                            onChange={props.napln}
                          />
                        </p>
                      </form>
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
                                required
                                id="number-input"
                                className="input"
                                type="text"
                                placeholder="Enter ingredients"
                                name="raw_materials"
                                value={ingredients.raw_materials}
                                onChange={handleChange(ingredient, index)}
                              />
                            </p>
                            <p className="widht" id="count">
                              <label htmlFor="number-input">Count</label>
                              <input
                                required
                                type="number"
                                name="count"
                                min={0}
                                value={ingredients.count}
                                onChange={handleChange(ingredient, index)}
                              />
                            </p>
                            <p id="unit">
                              <label htmlFor="number-input">Unit</label>
                              <select
                                required
                                id="select"
                                name="unit"
                                value={ingredients.unit}
                                onChange={handleChange(ingredient, index)}
                              >
                                <option></option>
                                <option value="g">g</option>
                                <option value="ks">ks</option>
                                <option value="ml">ml</option>
                                <option value="lžička">lžička</option>
                              </select>
                            </p>
                            <div className="add">
                              <i className="fa-solid fa-plus" onClick={add}></i>
                            </div>
                            <div className="delete">
                              <i className="fa-solid fa-trash" onClick={remove}>
                                {" "}
                              </i>
                            </div>
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
                        required
                        name="difficulty"
                        value={props.difficulty}
                        onChange={props.napln}
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
                        required
                        name="description"
                        placeholder="Enter description of the recipe"
                        value={props.description}
                        onChange={props.napln}
                      ></textarea>
                    </form>
                    <form>
                      <p>Author</p>
                      <input
                        required
                        type="text"
                        name="author"
                        placeholder="Enter your name"
                        value={props.author}
                        onChange={props.napln}
                      ></input>
                      <Image imageChange={imageChange}></Image>
                    </form>
                    <input
                      type="submit"
                      value="Create"
                      onClick={props.create}
                    ></input>
                  </div>

                  <div className="alert">
                    {alert && (
                      <Alert
                        onClose={() => {
                          setAlert(false);
                        }}
                      >
                        {" "}
                        Recept byl vytvořen{" "}
                      </Alert>
                    )}
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
