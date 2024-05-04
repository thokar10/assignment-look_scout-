import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./responsive.css";
import HomePage from "./Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
