import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import About from "./components/intro/about/About";
import Productlist from "./components/productList/Productlist";


function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <Productlist/>
      <Contact/>
    </div>
  );
}

export default App;
