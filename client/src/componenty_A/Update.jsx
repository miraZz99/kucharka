import axios from "axios";

import React from "react";
import { useState } from "react";

export default function Image(props) {
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(!isOpen);
    setServing(1);
  }

  return (
    <div>
      {" "}
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
                  <img src={image} alt="" />
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
                  <h2>Postup přípravy receptu</h2>
                  <br />
                  {detail.description}
                </div>

                <></>
              </div>
            </>
          }
          handleClose={open}
        />
      )}
    </div>
  );
}
