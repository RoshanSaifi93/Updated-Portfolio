import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;