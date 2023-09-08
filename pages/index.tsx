import Head from 'next/head';
import Grid from '../components/Grid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid />
      </main>

      <footer></footer>
    </div>
  );
}
