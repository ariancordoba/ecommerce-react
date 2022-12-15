import React from "react";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import HeaderTop from "./components/HeaderTop/HeaderTop";

function App() {
  return (
    <div>
      <HeaderTop />
      <NavBar />
      <ItemListContainer greeting={"Proximamente ingresaran nuevos productos!"} />
    </div>
  );
}

export default App;
