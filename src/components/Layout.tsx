import React from 'react'
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex flex-col items-center">{children}</main>
      {/*footer*/}
    </div>
  );
};

export default Layout;
