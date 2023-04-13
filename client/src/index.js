// ======================== React
import React from "react";
import ReactDOM from "react-dom";

// ======================== React Router Dom
import { BrowserRouter } from "react-router-dom";

// ======================== Styles
import "./index.css";

// ======================== App
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
