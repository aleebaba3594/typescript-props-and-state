import React, { useState } from "react";

function Inputs() {
  const [first, setfirst] = useState<string>("");
  const [second, setsecond] = useState<string[]>([]);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirst(e.target.value);
  };
  

  return (
      <div>
        <h1 style={{color:"red",textAlign:"center"}}>controledd input component</h1>
      <input
        type="text"
        onChange={handleInput}
        placeholder="enter the text here"
        value={first}
      />
      <button
        onClick={(e) => {
          setsecond([...second, first])
    setfirst("");
    ;
        }}
      >
        click me
      </button>
      <ul>
        {second.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default Inputs;
