const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
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
