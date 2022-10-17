import React, { useState, useRef } from "react";

function SecondInput() {
  const [second, setsecond] = useState<string[]>([]);

  const inputref = useRef<HTMLInputElement | null>(null);
  console.log(inputref, "bakwas");

  const handleInput = () => {
    if (inputref.current) {
      const first = inputref.current.value;
      setsecond([...second, first]);
      inputref.current.value = "";
    }
  };

  return (
    <div>
      <h1 style={{ color: "green", textAlign: "center" }}>
        Uncontroledd input component
      </h1>
      <input ref={inputref} type="text" placeholder="enter the text here" />
      <button onClick={handleInput}>click me</button>
      <ul>
        {second.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default SecondInput;
