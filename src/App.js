// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero.js';
import MidPage from './components/MidPage';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Extras/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <MidPage />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
