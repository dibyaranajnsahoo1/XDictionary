import React, { useState } from "react";

const Xdictionary = () => {
  const data = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (!search.trim()) {
      setResult("Word not found in the dictionary.");
      return;
    }

    const foundWord = data.find((item) => item.word.toLowerCase() === search.toLowerCase());
    setResult(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        
        <input
          id="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a word..."
          aria-label="Search input"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h3>Definition:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Xdictionary;
