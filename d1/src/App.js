import logo from "./japanese-food.png";
import "./App.css";
import Nav from "./Nav";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body img={logo} />
    </div>
  );
}

export default App;
