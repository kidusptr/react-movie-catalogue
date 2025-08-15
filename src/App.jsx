import Search from "./components/search";
import { useState } from "react";
const App = () => {
  // Main application component
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll enjoy
            without the hustle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <h1 className="text-white text-3xl">{searchTerm}</h1>
    </main>
  );
};

export default App;
