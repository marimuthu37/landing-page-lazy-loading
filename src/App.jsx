import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; 


const LazyPlaces = lazy(() => import('./Places'));
const LazyAbout = lazy(() => import('./About'));
const LazyTravelForm = lazy(() => import('./TravelForm'));
const LazyHome = lazy(() => import('./Home'));


function App() {
  return (
    <HashRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Suspense fallback={<h1>Loading...</h1>}><LazyHome/></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<h1>Loading...</h1>}><LazyAbout/></Suspense>} />
        <Route path="/places" element={<Suspense fallback={<h1>Loading...</h1>}><LazyPlaces /></Suspense>} />
        <Route path="/book" element={<Suspense fallback={<h1>Loading...</h1>}><LazyTravelForm/></Suspense>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
