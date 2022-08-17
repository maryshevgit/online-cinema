import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import MoviePage from './components/MoviePage/MoviePage';
import Movies from './pages/Movies/Movies';
import Auth from './pages/Auth/Auth';
import Discovery from './pages/Discovery/Discovery';
import FreshMovies from './pages/FreshMovies/FreshMovies';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Trends from './pages/Trends/Trends';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/discovery' element={<Discovery />} />
        <Route path='/fresh' element={<FreshMovies />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/trends' element={<Trends />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/registration' element={<Auth />} />
        <Route path='movie/:id' element={<MoviePage />} />
        <Route path='trends/:id' element={<MoviePage />} />
        <Route path='fresh/:id' element={<MoviePage />} />
      </Route>
    </Routes>
  );
}

export default App;

