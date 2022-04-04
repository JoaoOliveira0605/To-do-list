import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
