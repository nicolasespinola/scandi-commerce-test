import React from "react";
import './styles.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App selected={0}/>} />
      <Route path="/selected=0" element={<App selected={0}/>} />
      <Route path="/selected=1" element={<App selected={1}/>} />
      <Route path="/selected=2" element={<App selected={2}/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
