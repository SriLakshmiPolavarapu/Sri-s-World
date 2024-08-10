import './App.css';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Skill from './container/skills';
import Contact from './container/contact';
import Projects from './container/projects';
import Navbar from './components/navBar';
import Education from './container/education';
import Experience from './container/experience';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='App-main-page-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
