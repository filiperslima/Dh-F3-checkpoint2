import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Footer from "./Components/Footer";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to={'/home'}/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
      </BrowserRouter >

  </React.StrictMode>








);
