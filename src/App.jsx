import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout'; 
import About from './About';
import Places from './Places';
import Home from './Home';
import TravelForm from './TravelForm';

const LazyPlaces = lazy(() => import('./Places'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {path: '/', element: <Home />},
      { path: 'about', element: <About /> }, 
      { path: 'places', element: <Suspense fallback={<div>Loading...</div>}><LazyPlaces /></Suspense>},
      {path: 'book',element:<TravelForm />},
      {path: '*', element: <h1>Not Found</h1>}
    ]
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

