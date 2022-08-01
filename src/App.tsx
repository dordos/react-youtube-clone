import React from "react";
import "./App.scss";
import HeaderBar from "./layout/HeaderBar";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";

function App() {
  return (
    <>
      <HeaderBar />
      <div className="main__container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
