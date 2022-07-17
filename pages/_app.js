import { Provider } from "react-redux";
import Layout from "../layout/Layout";
import store from "../store/store";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps, seession }) {
  return (
    <SessionProvider session={seession}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
