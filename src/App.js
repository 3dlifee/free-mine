import "./App.css";

export var valueKey = process.env.REACT_APP_ACCESS_KEY;
console.log(valueKey);

function App() {
  return <div className="App">{/* <GameScene/> */}</div>;
}

export default App;
