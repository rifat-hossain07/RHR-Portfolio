import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.jsx";
import "aos/dist/aos.css";
import Aos from "aos";

Aos.init();
Aos.refresh();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
