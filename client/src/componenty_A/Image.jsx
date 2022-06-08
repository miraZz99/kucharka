import axios from "axios";

import React from "react";
// import { useState } from "react";

export default function Image(props) {
  return (
    <div>
      <input
        type="file"
        name="picture"
        onChange={props.imageChange}
        value={props.image}
      />

      {props.image && (
        <div>
          <img src={props.image} style={{ height: "200px", width: "200px" }} />
        </div>
      )}
    </div>
  );
}
