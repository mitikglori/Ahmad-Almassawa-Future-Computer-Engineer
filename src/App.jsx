import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Photography from "./components/Photography";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [active, setActive] = useState("home");

  const sections = {
    home: <Home />,
    projects: <Projects />,
    photography: <Photography />,
    about: <About />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Navbar active={active} setActive={setActive} sections={sections} />
      <main>{sections[active]}</main>
    </div>
  );
}

export default App;
