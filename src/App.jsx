import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Services from "./components/services";
import Process from "./components/process";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Services />
        <Process />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
