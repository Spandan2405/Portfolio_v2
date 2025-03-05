import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header/Header";
import Intro from "./pages/Introduction/Intro";
import Skills from "./pages/Skills/skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Github from "./pages/Projects/Github";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact/Contact";
import VerticalNav from "./components/VerticalNav";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <VerticalNav />
      <main>
        <Intro />
        <Skills />
        <Experience />
        <Resume />
        <Projects />
        <Github />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
