'use client';

import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/global.css';
import { TriviaProvider } from '../components/TriviaContext';
import bg from '../images/background.png';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/1c5234fcba.js" />
      <Head>
        <title>Trivia Night!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={bg}
        alt="background"
        layout="fill"
        style={{ zIndex: '-10', positions: 'static' }}
      />
      <TriviaProvider>
        <Component {...pageProps}></Component>
      </TriviaProvider>
    </>
  );
}
