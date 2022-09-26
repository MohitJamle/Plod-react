import "./App.css";
import Home from "./pages/Home";
import About1 from "./pages/About1";
import { Routes, Route } from "react-router-dom";
import Services1 from "./pages/Services1";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about1" element={<About1 />} />
        <Route path="/services1" element={<Services1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
