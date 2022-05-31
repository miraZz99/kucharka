import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";

const StarRating = (props) => {
  const { _id } = props;

  // const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [end, setEnd] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/rating/list/${_id}`)
      .then((response) => {
        let data = response.data;
        setEnd(data);
      })
      .catch((error) => console.log(error));
  }, [setEnd]);

  function ratingToDb(ratingValue) {
    axios
      .post(`http://localhost:8080/rating`, {
        _id: _id,
        evaluated: ratingValue,
      })
      .then((response) => setEnd(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              className="star-input"
              type="radio"
              style={{ display: "none" }}
              name="rating"
              value={end}
              onClick={() => ratingToDb(ratingValue)}
            />

            <FaStar
              className="star"
              color={ratingValue <= (hover || end) ? "#ffc107" : "#e4e5e9"}
              size={35}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {/* <p>The rating is {rating}.</p> */}
    </div>
  );
};

export default StarRating;
