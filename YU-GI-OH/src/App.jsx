import "./App.css";

// import Should_you_buy from "./conponents/Should_you_buy";
// import Description_Page from "./conponents/Description_Page"
// import CardDetails from "./conponents/CardDetails";
// import Form from "./conponents/Form";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home_Page from "./pages/Home_Page";
import All_Cards from "./pages/All_Cards";
import About from "./pages/About";
import Layout from "./conponents/Layout";
import FormPage from "./pages/FormPage";
import QuestionName from "./pages/QuestionName";
import QuestionAttribute from "./pages/QuestionAttribute";
import QuestionType from "./pages/QuestionType";
import QuestionAttack from "./pages/QuestionAttack";
import QuestionDefense from "./pages/QuestionDefense";
import QuestionDescription from "./pages/QuestionDescription";
import DescriptionCard from "./pages/DescriptionCard";
import CardDetails from "./conponents/CardDetails"
import Oopsies from "./pages/Oopsies";

function App() {
  return (
    <>
    {/* <CardDetails /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home_Page />} />
          <Route path="/all-cards" element={<All_Cards />} />
          <Route path="/all-cards/:id" element={<DescriptionCard />} />
          <Route path="/create-card" element={<FormPage />}>
            <Route path="name-card" element={<QuestionName />} />
            <Route path="type" element={<QuestionType />} />
            <Route path="attribute-card" element={<QuestionAttribute />} />
            <Route path="attack" element={<QuestionAttack />} />
            <Route path="defense" element={<QuestionDefense />} />
            <Route path="description" element={<QuestionDescription />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Oopsies />} />
      </Routes>
    </>
  );
}

export default App;
