import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import React from "react";
import { useState } from "react";

function App() {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <div>Enter Some text</div>
      <input value={term} onChange={handleChange} />
      <h3>Your Text</h3>
      <p>{term}</p>
    </div>
  );
}

export default App;
