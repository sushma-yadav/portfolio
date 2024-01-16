import "./App.css";
import AboutMe from "./component/about/AboutMe";
import ClientReview from "./component/clientReview/ClientReview";
import Footer from "./component/common/Footer";
import Navbar from "./component/common/Navbar";
import ContactMe from "./component/contact/ContactMe";
import HeroBanner from "./component/heroBanner/HeroBanner";
import Projects from "./component/projects/Projects";
import Skills from "./component/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HeroBanner /> */}
      {/* <AboutMe /> */}
      {/* <Skills /> */}
      <Projects />
      {/* <ClientReview /> */}
      {/* <ContactMe /> */}
      <Footer />
    </div>
  );
}

export default App;
