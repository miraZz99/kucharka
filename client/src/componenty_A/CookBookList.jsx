import React, { useEffect, useState } from "react";
import axios from "axios";
import ListData from "./ListData";
import Image from "./Image";

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
    setFind({ name: "" });
    setCreate(!create);
  }
  const [rec, setRec] = useState(false);
  const [result, setResult] = useState(false);

  const buttnRecipe = () => {
    setRec(!rec);
  };

  useEffect(() => {
    buttnRecipe();
    setResult(false);
    setFind(false);
    setCreate(false);
    axios
      .get(`http://localhost:8080/recipe/list`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  function addRecepi(newRecipi) {
    setBooks([...books, newRecipi]);
  }

  // console.log(vysledek);

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

      {result && (
        <ListData
          isAdmin={isAdmin}
          books={vysledek}
          setBooks={setBooks}
          addRecepi={addRecepi}
        />
      )}
      {/* <div>{result ? <h1>ahoj</h1> : <h1>Nic</h1>}</div> */}

      {rec && <ListData isAdmin={isAdmin} books={books} setBooks={setBooks} />}
    </div>
  );
}
