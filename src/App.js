import './App.css';
import AboutMe from './component/about/AboutMe';
import ClientReview from './component/clientReview/ClientReview';
import ContactMe from './component/contact/ContactMe';
import HeroBanner from './component/heroBanner/HeroBanner';
import Projects from './component/projects/Projects';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <AboutMe />
      <Projects />
      <ClientReview />
      <ContactMe />
    </div>
  );
}

export default App;
