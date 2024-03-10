import React from "react";
import { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import ScrollTop from "./components/ScrollTop";
import Skill from "./components/Skill";
import useDarkModeStore from "./zustand/useDarkModeStore";

const App: React.FC = () => {
  const [darkMode] = useDarkModeStore((state) => [state.darkMode]);
  const [isClient, setIsClient] = useState(false);

  // 클라이언트 사이드에서만 실행되도록 설정
  if (typeof window !== "undefined" && !isClient) setIsClient(true);

  return (
    <div className={darkMode ? "dark" : "white"}>
      <Header />
      <main>
        <Intro />
        <Experience />
        <Project />
        <Skill />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default App;
