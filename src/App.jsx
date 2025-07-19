import "./App.css";

const Card = ({ title }) => {
  return <h2>{title}</h2>;
};
const App = () => {
  return (
    <div>
      <Card title="Iron Man" />
      <Card title="Captain America" />
      <Card title="Thor" />
      <Card title="Hulk" />
    </div>
  );
};

export default App;
