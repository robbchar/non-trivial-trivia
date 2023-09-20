import styles from './Answer.module.css';
import { useContext, useEffect, useState } from 'react';
import { TriviaContext } from '../../components/TriviaContext';

export default function Answer({ answer, revealAnswer }) {
  const [className, setClassName] = useState(styles.answer);
  const context = useContext(TriviaContext);

  useEffect(() => {
    if (context.revealAnswer) {
      setClassName(answer.correct ? styles.correctAnswer : styles.wrongAnswer);
    } else {
      setClassName(styles.answer);
    }
  }, [revealAnswer]);

  console.log({ revealAnswer });
  return (
    <div className={className}>
      <p>{answer.text}</p>
    </div>
  );
}
