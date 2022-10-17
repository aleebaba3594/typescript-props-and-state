import React from "react";
import Divide from "./components/Divide";
import Minus from "./components/Minus";
import Multiply from "./components/Multiply";
import Plus from "./components/Plus";
import Inputs from "./components/Inputs";
import SecondInput from "./components/Second_Input";
function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "gray", textAlign: "center" }}>
        <h1 style={{ color: "brown" }}>dealing typescript with props</h1>

        <Plus jama="Plus" />
        <Minus nafi="minus" val={20} />
        <Minus nafi="minus" style={{ color: "green" }} />
        <Multiply zarab="multiply">
          {" "}
          <span>jiuikiuk</span>
        </Multiply>
        <Divide />
      </div>
      <Inputs />
      <SecondInput />
    </div>
  );
}

export default App;
