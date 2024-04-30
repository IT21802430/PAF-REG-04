import type { AppProps } from "next/app";
import { FafaFont } from "@lib/fonts";
import toast, { Toaster } from "react-hot-toast";

import "@styles/globals.css";
import Xproviders from "@/components/common/Provider";
import { AuthProvider } from "@/context/AuthProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style global jsx>{`
        body {
          font-family: ${FafaFont.style.fontFamily};
        }
      `}</style>
      <AuthProvider>
        <Xproviders>
          <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
          <Component {...pageProps} />
        </Xproviders>
      </AuthProvider>
    </>
  );
};

export default App;