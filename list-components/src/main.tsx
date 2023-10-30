import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import eduBackground from "./pages/EduBack";

//import AppRouter from "./Router";

//ReactDOM.createRoot(document.getElementById("root")!).render(<AppRouter />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
