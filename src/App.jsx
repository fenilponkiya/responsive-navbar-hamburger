import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Home, Service } from "./component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
