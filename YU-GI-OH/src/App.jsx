import "./App.css";

// import Should_you_buy from "./conponents/Should_you_buy";
// import Description_Page from "./conponents/Description_Page"
// import CardDetails from "./conponents/CardDetails";
// import Form from "./conponents/Form";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home_Page from "./pages/Home_Page";
import All_Cards from "./pages/All_Cards";
import Create from "./pages/Create";
import About from "./pages/About";

import "./conponents/Header";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Should_you_buy from "./conponents/Should_you_buy";
import Description_Page from "./conponents/Description_Page";
import Callout from "./conponents/Callout";
import CardDetails from "./conponents/CardDetails";
import Form from "./conponents/Form";
import Question from "./conponents/Question";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/All_Cards" element={<All_Cards />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/About" element={<About />} />
      </Routes>

      {/* <Header />
      <Description_Page />
      <Should_you_buy />
      <Footer />       */}

      {/* <Header /> */}
      {/* <CardDetails></CardDetails> */}
      {/* <Form></Form> */}
      <Question></Question>
      {/* <Callout></Callout>
      <Should_you_buy />
      <Footer /> */}
    </>
  );
}

export default App;
