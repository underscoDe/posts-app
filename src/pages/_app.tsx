import Layout from "@/components/Layout";
import RegisterModal from "@/modals/RegisterModal";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
