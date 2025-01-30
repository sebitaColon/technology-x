import React from 'react'
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex flex-col items-center">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
