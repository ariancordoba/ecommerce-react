import React from "react";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={"Proximamente ingresaran nuevos productos!"} />
    </div>
  );
}

export default App;
