import React from 'react';
import { AppProps } from 'next/app';  // Import AppProps type from Next.js
import ErrorBoundary from '../components/error/ErrorBoundary';
import Layout from '@/components/layout/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
