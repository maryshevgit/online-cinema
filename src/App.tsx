import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Discovery from './pages/Discovery/Discovery';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/discovery' element={<Discovery />} />
      </Route>
    </Routes>
  );
}

export default App;
