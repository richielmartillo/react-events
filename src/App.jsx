import Clicker from "./Clicker";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div>
      <Clicker message="HI!!!" buttonText="Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" />
    </div>
  );
}

export default App;
