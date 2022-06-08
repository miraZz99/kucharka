import { Popup } from "../components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import StarRating from "./StarRating";
import { RiH4 } from "react-icons/ri";

export default function Details(props) {
  const { ide, setBooks, image } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetails] = useState();
  const [serving, setServing] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recipe/list/details/${ide}`)
      .then((response) => setDetails(response.data))
      .catch((error) => console.log(error));
  }, [setDetails]);
  function open() {
    setIsOpen(!isOpen);
    setServing(1);
  }
  function plus() {
    setServing(serving + 1);
  }
  function minus() {
    if (serving > 1) setServing(serving - 1);
  }

  function porce(serv) {
    if (serv > 4) {
      return "porci";
    } else return "porce";
  }

  return (
    <div>
      <div className="icon" onClick={open}>
        <i className="fa-solid fa-circle-info"></i>
      </div>

      <div id="details">
        {isOpen && (
          <Popup
            content={
              <>
                <div className="details">
                  <div id="starRating">
                    {" "}
                    <StarRating _id={ide} isOpen={isOpen} />{" "}
                  </div>
                  <div id="name">
                    <h1>{detail.name}</h1>
                  </div>

                  <div id="image">
                    {image ? (
                      <img src={`http://localhost:8080/uploads/${image}`} />
                    ) : (
                      <img
                        src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                        alt=""
                      />
                    )}
                  </div>

                  <div id="ingrediences">
                    <div className="nadpis-surovin">
                      <h2>Suroviny</h2>
                      <h4>
                        {serving} {porce(serving)}
                      </h4>

                      <i
                        id="plus"
                        className="fa-regular fa-square-plus"
                        onClick={plus}
                      ></i>
                      <i
                        id="minus"
                        className="fa-regular fa-square-minus"
                        onClick={minus}
                      ></i>
                    </div>
                    <br />
                    {detail.ingrediences.map((ingred, index) => {
                      return (
                        <div key={index}>
                          {" "}
                          <i className="fa-regular fa-circle fa-2xs = true"></i>
                          {"  "}
                          {ingred.count && ingred.count * serving} {ingred.unit}{" "}
                          {ingred.raw_materials}
                        </div>
                      );
                    })}
                  </div>

                  <div id="description">
                    <div name="descriptions">
                      <h2>Postup přípravy receptu</h2>
                      <br />
                      {detail.description}
                    </div>
                    <div name="navic">
                      <i class="fa-solid fa-kitchen-set fa-xl"></i>{" "}
                      {detail.difficulty}
                      <br />
                      <br />
                      <br />
                      <i class="fa-solid fa-clock-rotate-left fa-xl"></i>{" "}
                      {detail.preparation}
                      minut
                    </div>
                  </div>

                  <></>
                </div>
              </>
            }
            handleClose={open}
          />
        )}
      </div>
    </div>
  );
}
