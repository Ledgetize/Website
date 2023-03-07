import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <h1>Hola</h1>
    </div>
  );
}

export default App;
