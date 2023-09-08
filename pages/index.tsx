import Head from 'next/head';
import Answers from '../components/Answers';
import Question from '../components/Question';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trivia Night!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Question />
        <Answers />
      </main>

      <footer></footer>
    </div>
  );
}
