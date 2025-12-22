import { useEffect } from "react";
import { useSelector } from "react-redux";
import About from "./components/About";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import CodingAchievements from "./components/CodingAchievements";
import Cursor from "./components/Cursor";

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <Cursor />
      <Header />
      <section id="home"><Profile /></section>
      <section id="about"><About /></section>
      <section id="expertise"><Expertise /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="achievements"><CodingAchievements /></section>
      <section id="timeline"><Timeline /></section>
      <Footer />

    </div>
  );
}

export default App;
