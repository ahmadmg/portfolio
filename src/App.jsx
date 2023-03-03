import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="*/"          element={<Home />} />
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/about"      element={<About />} />
          <Route path="/Contact"    element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
