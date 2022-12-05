import logo from "./japanese-food.png";
import "./App.css";
import Nav from "./Nav";
import Body from "./Body";

function App() {
  let color = "bg-dark";
  return (
    <div className="App">
      <Nav color={color} />
      <Body img={logo} />
    </div>
  );
}

export default App;
