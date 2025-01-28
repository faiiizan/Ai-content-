import React from 'react';
import { AppProps } from 'next/app';  // Import AppProps type from Next.js
import ErrorBoundary from '../components/error/ErrorBoundary';
import Layout from '@/components/layout/Layout';
import { useRouter } from 'next/router';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

const router = useRouter();

const checkRoutes = () => {
  let hide = false;
  if(router.pathname === "/dashboard"){
    hide = true;
  }

  return hide
}

  return (
    <ErrorBoundary>
      <Layout hide={checkRoutes()}>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
