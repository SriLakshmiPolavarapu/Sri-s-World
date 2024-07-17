import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Resume from './container/resume';
import Skill from './container/skills';
import Contact from './container/contact';
import Projects from './container/projects';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='App-main-page-content'>
        <Routes>
          <Route index path = '/' element = {<Home/>}></Route>
          <Route path = '/about' element = {<About/>}></Route>
          <Route path = '/resume' element = {<Resume/>}></Route>
          <Route path = '/skills' element = {<Skill/>}></Route>
          <Route path = '/contact' element = {<Contact/>}></Route>
          <Route path = '/projects' element = {<Projects/>}></Route>
        </Routes>
        </div>
    </div>
  );
}

export default App;
