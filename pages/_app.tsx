import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import {SessionProvider} from "next-auth/react";
import {Provider} from "react-redux";
import store from "../shared/redux/store";

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
      <Provider store={store}>
          <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </SessionProvider>
      </Provider>
  );
}
