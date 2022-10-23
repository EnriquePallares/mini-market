import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
export interface LayoutInterface {}

const Layout: React.FC<LayoutInterface> = () => {
  return (
    <div className='bg-[url("/src/assets/images/main-fondo.jpg")] bg-contain'>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
