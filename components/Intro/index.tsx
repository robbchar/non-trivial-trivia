import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Intro.module.css';
import { TriviaContext } from '../TriviaContext';
import { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import Category from '../Category';

const getContent = (currentSlide, currentCategory, context, router) => {
  if (currentSlide === 0) {
    return (
      <>
        <Image src={logo} alt="logo" width="487" height="322" />
      </>
    );
  } else if (currentSlide > context.triviaGame.categories.length) {
    router.push('/questions');
  } else {
    return <Category title={currentCategory.title} />;
  }
};

const goToNextSlide = (currentSlide, setCurrentSlide, context) => {
  setCurrentSlide(currentSlide + 1);
};

export default function Intro() {
  const context = useContext(TriviaContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => goToNextSlide(currentSlide, setCurrentSlide, context)}
    >
      {getContent(
        currentSlide,
        context.triviaGame.categories[currentSlide - 1],
        context,
        router,
      )}
    </div>
  );
}
