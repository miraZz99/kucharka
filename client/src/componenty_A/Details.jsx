import { Popup } from "../components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ListData from "./ListData";

export default function Details(props) {
  const { ide } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recipe/list/details/${ide}`)
      .then((response) => setDetails(response.data))
      .catch((error) => console.log(error));
  }, [setDetails]);
  function open() {
    setIsOpen(!isOpen);
  }
  console.log(detail);
  return (
    <div>
      <div className="icon" onClick={open}>
        <i class="fa-solid fa-circle-info"></i>
      </div>

      <div>
        {isOpen && (
          <Popup
            content={
              <>
                <h1>{detail.name}</h1>
                <div> {detail.preparation}</div>

                <div> {detail.difficulty}</div>
                <div> {detail.author}</div>
                <div> {detail.dateAdded}</div>
                <div>
                  <h2>Suroviny</h2>
                  {detail.ingrediences.map((ingred, index) => {
                    return (
                      <div key={index}>
                        {" "}
                        {ingred.count} {ingred.unit}, {ingred.raw_materials}
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h2>Postup přípravy receptu</h2>
                  {detail.description}
                </div>

                <></>
              </>
            }
            handleClose={open}
          />
        )}
      </div>
    </div>
  );
}
