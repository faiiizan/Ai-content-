import React from "react";
import { AppProps } from "next/app"; // Import AppProps type from Next.js
import ErrorBoundary from "../components/error/ErrorBoundary";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const checkRoutes = () => {
    let hide = false;
    if (
      router.pathname === "/dashboard/**" ||
      router.pathname !== "/dashoard/templates"
    ) {
      hide = true;
    } else {
      hide = false;
    }

    return hide;
  };

  return (
    <ErrorBoundary>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <Provider store={store}>
        <Layout hide={checkRoutes()}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
};

export default MyApp;
