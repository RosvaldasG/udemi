import React from "react";
import Maping from "../components/maping/Maping";
import "./styles.css";

const App = () => {
  const names = [
    { id: 1, name: "geras" },
    { id: 2, name: "sikna" },
    { id: 3, name: "mikna" },
    { id: 1, name: "geras" },
    { id: 2, name: "sikna" },
    { id: 3, name: "mikna" },
    { id: 4, name: "kikna" }
  ];
  return (
    <div className="App">
      <h1>Labas bandome dirbti su react</h1>
      <Maping names={names} />
    </div>
  );
};
export default App;
