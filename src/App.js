import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";
import Dialogs from "./components/Dialogs/Dialogs";
import FetchRandomUser from "./fetch/FetchRandomUser";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      {/* <Nav/> */}
      <div class={"app-wrapper-content"}>
        {/* <Dialogs/> */}
        <Feed />
        <FetchRandomUser />
      </div>
    </div>
  );
}

export default App;
