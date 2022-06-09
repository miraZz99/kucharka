import React from "react";
import "../App.css";
import DeleteRecipe from "./DeleteRecipe";
import StarRating from "./StarRating";
import "./style.css";
import Details from "./Details";
import Update from "./Update";

export default function ListData(props) {
  const { setBooks, books, isAdmin, updateRecepi } = props;

  return (
    <div className="ol">
      {books.length > 0 &&
        books.map((book, index) => {
          return (
            <div className="border" key={index}>
              <div className="detail">
                <Details
                  image={book.image}
                  setBooks={setBooks}
                  ide={book._id}
                />
              </div>
              <div className="image">
                {book.image ? (
                  <img src={`http://localhost:8080/uploads/${book.image}`} />
                ) : (
                  <img
                    src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                    alt=""
                  />
                )}
              </div>
              <div className="rating">
                <h1>{book.name}</h1>
                {isAdmin && (
                  <div id="delete">
                    {" "}
                    <DeleteRecipe
                      remove={book._id}
                      books={books}
                      setBooks={setBooks}
                    />{" "}
                  </div>
                )}
                {isAdmin && (
                  <div id="update">
                    <Update updateRecepi={updateRecepi} id={book._id}>
                      {" "}
                    </Update>
                  </div>
                )}
              </div>
              <div id="rating">
                {" "}
                <StarRating _id={book._id} book={book} />{" "}
              </div>
            </div>
          );
        })}
    </div>
  );
}
