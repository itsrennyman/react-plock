import React from "react";
import ReactDOM from "react-dom";
import { Plock } from "./components";

function App() {
  const configuration = {
    sm: { size: 640, columns: 1 },
    md: { size: 768, columns: 2 },
    lg: { size: 1024, columns: 3 },
    xl: { size: 1280, columns: 6 },
  };

  return (
    <Plock gap={20} nColumns={configuration}>
      <div style={{ height: 100, width: "100%", background: "yellow" }}>1</div>
      <div style={{ height: 200, width: "100%", background: "blue" }}>2</div>
      <div style={{ height: 150, width: "100%", background: "red" }}>3</div>
      <div style={{ height: 500, width: "100%", background: "orange" }}>4</div>
    </Plock>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
