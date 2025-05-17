import './App.css';
import Header from './components/Header';
import Hero from './components/hero';
import About from './components/About';
import Projects from './components/projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Header/>    
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
