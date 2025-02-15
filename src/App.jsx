import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; 
import About from './About';
import Home from './Home';
import TravelForm from './TravelForm';

const LazyPlaces = lazy(() => import('./Places'));

function App() {
  return (
    <HashRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<Suspense fallback={<div>Loading...</div>}><LazyPlaces /></Suspense>} />
        <Route path="/book" element={<TravelForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
