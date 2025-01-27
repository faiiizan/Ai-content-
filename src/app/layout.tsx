import React from 'react';
import { ReactNode } from 'react';
import ErrorBoundary from '../components/error/ErrorBoundary';
import Header from '../components/layout/Header';  // Ensure correct path
import Footer from '../components/layout/Footer';  // Ensure correct path
import "./globals.css";

  

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-main-pattern">
        <ErrorBoundary>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <div className='container mx-auto'>
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default Layout;
