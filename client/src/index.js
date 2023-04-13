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
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
