import './App.css';
import {Routes, Route} from 'react-router-dom';
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
          <Route index path = '/' element = {<Home/>}></Route>
          <Route path = '/about' element = {<About/>}></Route>
          <Route path = '/skills' element = {<Skill/>}></Route>
          <Route path = '/education' element = {<Education/>}></Route>
          <Route path = '/experience' element = {<Experience/>}></Route>
          <Route path = '/projects' element = {<Projects/>}></Route>
          <Route path = '/contact' element = {<Contact/>}></Route>

        </Routes>
        </div>
    </div>
  );
}

export default App;
