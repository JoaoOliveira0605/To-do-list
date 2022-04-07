import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/to-do-list";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/List" element={<List />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
