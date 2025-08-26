import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Photography from "./components/Photography";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState("home");

  const sections = {
    home: <Home />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <Experience />,
    education: <Education />,
    photography: <Photography />,
    about: <About />,
    contact: <Contacts />,
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Navbar active={active} setActive={setActive} sections={sections} />
      <main>{sections[active]}</main>
      <Footer />
    </div>
  );
}

export default App;
