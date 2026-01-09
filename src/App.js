/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
-------------------------------------------------------------------------------------
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page === 'home') {
      return (
        <>
          <h1>Hi, I'm Nandan</h1>
          <p>Aspiring Developer and Computer Science Graduate from UOA</p>
        </>
      );
    } else if (page === 'about') {
      return (
        <>
          <h1>About Me</h1>
          <p>I enjoy solving problems with code and love learning new technologies.</p>
        </>
      );
    } else if (page === 'projects') {
      return (
        <>
          <h1>Projects</h1>
          <p>Here are some cool projects I’ve built recently.</p>
        </>
      );
    }
  };

  return (
    <>
      <Navbar onNavClick={setPage} />
      <section className="page">{renderPage()}</section>
    </>
  );
}

export default App;
*/
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer className="footerContainer" />
    </HashRouter>

  );
}

export default App;




