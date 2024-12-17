import React, { useState } from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import  Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Profile />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
