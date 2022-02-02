/* eslint-disable react/jsx-props-no-spreading */
import client from "apollo-client";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { DefaultColorContext, TeacherContext, ThemeContext } from "@contexts";

import "../styles/globals.css";

const Application = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <ApolloProvider client={client}>
      <TeacherContext.Provider>
        <DefaultColorContext.Provider>
          <ThemeContext.Provider>
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </DefaultColorContext.Provider>
      </TeacherContext.Provider>
    </ApolloProvider>
  </SessionProvider>
);
export default Application;
