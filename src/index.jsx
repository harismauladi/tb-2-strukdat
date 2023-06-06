import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/style.css";
import NoteApp from "./Pages/NoteApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
