import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import NoteApp from "./Pages/NoteApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BSTDemo from "./Pages/BSTDemo";

const route = createBrowserRouter([
  {
    path: "/",
    element: <NoteApp />,
  },
  {
    path: "/bstdemo",
    element: <BSTDemo />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
