import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
