'use client';

import Head from 'next/head';
import Script from 'next/script';
import '../styles/global.css';
import { TriviaProvider } from '../components/TriviaContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/1c5234fcba.js" />
      <Head>
        <title>Trivia Night!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TriviaProvider>
        <Component {...pageProps}></Component>
      </TriviaProvider>
    </>
  );
}
