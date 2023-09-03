import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Productlist from "./components/productList/Productlist";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";
import Skills from "./components/skills/Skills";


function App() {

  const theme = useContext(ThemeContext)
  const darkMode =theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <Education/>
      <Skills/>
      <Productlist/>
      <Contact/>
    </div>
  );
}

export default App;