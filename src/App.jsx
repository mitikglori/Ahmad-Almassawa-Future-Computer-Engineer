import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Photography from "./components/Photography";

function App() {
  const [active, setActive] = useState("home");

  const sections = {
    home: <Home />,
    projects: <Projects />,
    about: <About />,
    skills: <Skills />,
    experience: <Experience />, 
    contacts: <Contacts />,
    photography: <Photography />,
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Navbar active={active} setActive={setActive} sections={sections} />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/photography' element={<Photography />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
