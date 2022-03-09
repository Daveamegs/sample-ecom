import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TopNav from "./component/TopNav";
import Jumbotron from "./component/mains/Jumbotron";

function App() {
  return (
    <Fragment>
      <TopNav />
      <Navbar />
      <Jumbotron />
    </Fragment>
  );
}

export default App;
