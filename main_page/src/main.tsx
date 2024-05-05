import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./responsive.css";
import HomePage from "./Home.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from "./components/contactPage.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contactPage",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
