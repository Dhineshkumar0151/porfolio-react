import Navbar from "./components/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/intro/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
