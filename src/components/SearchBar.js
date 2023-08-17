import { useState } from "react";

function SearchBar({ onSubmit }) {
  // const handleClick = () => {
  //   onSubmit("lego");
  // };

  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit("google");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
