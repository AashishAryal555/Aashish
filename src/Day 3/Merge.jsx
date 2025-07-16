import React from "react";

export default function Merge() {

     const StringArray = ["kera", "sayau", "suntala", "angur", "nariwal"];
     const numbers = [1, 2, 3, 4, 5];

    const mergedArray = [...StringArray, ...numbers];
  return (
    <div className="Merge">
      <h1>Merge Component</h1>
      <ul>
        {mergedArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
