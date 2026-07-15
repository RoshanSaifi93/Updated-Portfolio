import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
    </div>
  );
}

export default App;