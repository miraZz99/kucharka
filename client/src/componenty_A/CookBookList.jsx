import React, { useEffect, useState } from "react";
import axios from "axios";
import ListData from "./ListData";
import Image from "./Image";
import SortBooks from "./SortBooks";

import Navbar from "../components/navbar/Navbar";

export default function CookBookList(props) {
  const [books, setBooks] = useState([]);
  const [create, setCreate] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [find, setFind] = useState({
    name: "",
  });
  const [vysledek, setVysledek] = useState([]);

  const finded = (event) => {
    setFind({ ...find, [event.target.name]: event.target.value });
  };

  function fidnPost() {
    setResult(true);
    setRec(false);
    axios
      .post("http://localhost:8080/recipe/find", find)
      .then((response) => setVysledek(response.data))
      .catch((error) => console.log(error));
    setFind({ find, name: "" });
    setCreate(!create);
  }
  const [rec, setRec] = useState(false);
  const [result, setResult] = useState(false);

  const buttnRecipe = () => {
    setRec(!rec);
  };

  // const getRecipe = () => {
  useEffect(() => {
    buttnRecipe();
    setResult(false);
    setFind(false);
    setCreate(false);
    axios
      .get(`http://localhost:8080/recipe/list`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, [setBooks]);

  function addRecepi(newRecipi) {
    setBooks([...books, newRecipi]);
  }
  function updateRecepi(newUpdateRecipi) {
    const newBooks = [...books];
    const foundIndex = newBooks.findIndex((x) => x._id == newUpdateRecipi._id);
    newBooks[foundIndex] = newUpdateRecipi;
    console.log(newUpdateRecipi, newBooks);
    setBooks(newBooks);
  }
  // function sortRecipe(newRecipi) {
  //   setBooks(newRecipi);
  //   console.log(newRecipi);
  // }
  console.log(books);
  return (
    <div className="App">
      <Navbar
        setIsAdmin={setIsAdmin}
        isAdmin={isAdmin}
        search={fidnPost}
        find={finded}
        name={find.name}
        addRecipe={addRecepi}
      ></Navbar>
      <SortBooks
        books={books}
        // onSortingBooks={setBooks}
        onSortingBooks={(sortedBooks) => setBooks(sortedBooks)}
        // sortRecipe={sortRecipe}
      ></SortBooks>
      {result && (
        <ListData
          updateRecepi={updateRecepi}
          isAdmin={isAdmin}
          books={vysledek}
          setBooks={setBooks}
          addRecepi={addRecepi}
        />
      )}

      {rec && (
        <ListData
          updateRecepi={updateRecepi}
          isAdmin={isAdmin}
          books={books}
          setBooks={setBooks}
        />
      )}
    </div>
  );
}
