// src/components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  hide?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, hide }) => {
  return (
    <div>
      {hide ? null : <Header />}
      <main>{children}</main>
      {hide ? null :<Footer />}
    </div>
  );
};

export default Layout;
