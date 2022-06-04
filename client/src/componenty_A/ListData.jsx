import React from "react";
import "../App.css";
import DeleteRecipe from "./DeleteRecipe";
import StarRating from "./StarRating";
import "./style.css";
import Details from "./Details";
import { useState } from "react";

export default function ListData(props) {
  const { setBooks, books } = props;

  return (
    <div className="ol">
      {books.length > 0 &&
        books.map((book, index) => {
          return (
            <div className="border" key={index}>
              <div className="detail">
                <Details ide={book._id} />
              </div>
              <div className="rating">
                <h1>{book.name}</h1>
                <div id="delete">
                  {" "}
                  <DeleteRecipe
                    remove={book._id}
                    books={books}
                    setBooks={setBooks}
                  />{" "}
                </div>
                <div id="update">
                  {" "}
                  <i className="fa-solid fa-pen  fa-lg={value.toString()" fa-xl>
                    {" "}
                  </i>
                </div>
              </div>
              <div id="rating">
                {" "}
                <StarRating _id={book._id} />{" "}
              </div>
            </div>
          );
        })}
    </div>
  );
}
