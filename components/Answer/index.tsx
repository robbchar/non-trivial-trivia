import styles from './Answer.module.css';
import { useEffect, useState } from 'react';

export default function Answer({ answer, revealAnswer }) {
  const [className, setClassName] = useState(styles.answer);
  useEffect(() => {
    if (revealAnswer) {
      setClassName(
        answer.correct
          ? styles.correctAnswer
          : `${styles.correctAnswer} ${styles.wrongAnswer}`,
      );
    } else {
      setClassName(styles.answer);
    }
  }, [revealAnswer]);

  return (
    <div className={className}>
      <p>{answer.text}</p>
    </div>
  );
}
