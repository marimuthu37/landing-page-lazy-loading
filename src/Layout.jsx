import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from './Head';

const Layout = () => {
  return (
    <div>
      <Head />  
      <Outlet /> 
    </div>
  );
};

export default Layout;
