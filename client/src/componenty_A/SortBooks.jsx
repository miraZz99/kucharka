import React, { useState } from "react";
import Select from "react-select";

const SortBooks = (props) => {
  let sortedBooks = props.books?.map((x) => x);

  const options = [
    { value: "name", label: "By name (A-Z)" },
    { value: "rating", label: "By rating (5-1)" },
    { value: "difficulty", label: "by complexity" },
  ];

  const handleChange = (newValue) => {
    if (newValue.value === "name") {
      sortedBooks.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else if (newValue.value === "rating") {
      sortedBooks.sort((a, b) => {
        let fa = a.evaluated,
          fb = b.evaluated;

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    } else if (newValue.value === "difficulty") {
      sortedBooks.sort((a, b) => {
        let fa = a.difficulty,
          fb = b.difficulty;

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    }
    // console.log(sortedBooks);
    props?.onSortingBooks(sortedBooks);
    // sortRecipe(sortedBooks);
  };

  return (
    <div className="sortBooks">
      <div id="selection-sort">
        <Select
          placeholder="Sort By"
          options={options}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SortBooks;
