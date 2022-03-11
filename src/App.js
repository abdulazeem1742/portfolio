import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import Aboutcontent from './components/Aboutpage/Aboutcontent';
import Contactpage from './components/Contact/Contactpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
	      </Routes>
        <Routes>
          <Route exact path="/aboutpage" element={<Aboutcontent/>}/>
	      </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contactpage/>}/>
	      </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
