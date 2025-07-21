import React, { useState } from "react";

const Card = ({ title, hasliked, onClick }) => {
  const [liked, setLiked] = useState(hasliked || false);
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      <button
        onClick={() => {
          setLiked(!liked);
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
const App = () => {
  return (
    <div className="card-container">
      <Card title="Iron Man" />
      <Card title="Captain America" />
      <Card title="Thor" />
      <Card title="Hulk" />
    </div>
  );
};

export default App;
