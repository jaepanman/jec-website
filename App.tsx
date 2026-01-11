
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Locations from './pages/Locations';
import TrialForm from './pages/TrialForm';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/trial" element={<TrialForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
