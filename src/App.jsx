import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}
