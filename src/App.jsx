import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./Components/Hero";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hola</h1>
      <Hero />
    </div>
  );
}

export default App;
