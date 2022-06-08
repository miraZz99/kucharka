import axios from "axios";
import { set } from "express/lib/application";
import { func } from "joi";
import React from "react";
import { useState } from "react";

export default function Image(props) {
  const { image, setImage } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  // const [image, setImage] = useState();

  const changeHandler = (event) => {
    // URL.createObjectURL(event.target.file[0]);
    console.log("V inputu: " + image);
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        onChange={(e) => console.log(e.target.files[0])}
      />
      <div>{/* <button onClick={handleSubmission}>Submit</button> */}</div>
      {/* {image && <img src={image}></img>} */}
    </div>
  );
}
