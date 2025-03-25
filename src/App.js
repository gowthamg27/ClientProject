import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import CollegeEvents from './pages/CollegeEvents';

import Videography from './pages/Videography';
import Research from './pages/Research';
import SocialAct from './pages/SocialActivities';
import './styles.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<CollegeEvents />} />
            <Route path="/social" element={<SocialAct/>} />
            <Route path="/videos" element={<Videography />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;