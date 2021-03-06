import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TopNav from "./component/TopNav";
import Jumbotron from "./component/mains/Jumbotron";
import NavCards from "./component/mains/NavCards";
import FlashSales from "./component/mains/FlashSales";
import NeverMiss from "./component/mains/NeverMiss";

function App() {
  return (
    <Fragment>
      <TopNav />
      <Navbar />
      <Jumbotron />
      <NavCards />
      <FlashSales />
      <NeverMiss />
    </Fragment>
  );
}

export default App;
