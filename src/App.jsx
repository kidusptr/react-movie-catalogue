import React, { useState } from "react";

const Card = ({ title, hasliked, onClick }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: hasliked ? "red" : "green" }}
      onClick={onClick}
    >
      <h2>{title}</h2>
    </div>
  );
};
const App = () => {
  const [hasliked, setHasliked] = useState(false);
  const toggleLike = () => {
    setHasliked(!hasliked);
  };
  return (
    <div className="card-container">
      <Card title="Iron Man" hasliked={hasliked} onClick={toggleLike} />
      <Card title="Captain America" hasliked={hasliked} onClick={toggleLike} />
      <Card title="Thor" hasliked={hasliked} onClick={toggleLike} />
      <Card title="Hulk" hasliked={hasliked} onClick={toggleLike} />
    </div>
  );
};

export default App;
