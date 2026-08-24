import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import DSA from "./components/dsa/DSA";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <DSA />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;