import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchImages from "./api";

// searchImages("hello");
const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
