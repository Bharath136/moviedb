import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import TopRatedMovie from './Components/TopRated';
import UpcomingMovie from './Components/UpcomingMovie';
import MovieDetails from './Components/MovieDetails';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/top-rated" element={<TopRatedMovie />} />
          <Route path="/upcoming" element={<UpcomingMovie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
