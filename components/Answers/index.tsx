import Answer from '../Answer';
import styles from './Answers.module.css';

export default function Answers({ answers }) {
  if (!answers) return null;

  const answerCOmponents = answers.map((answer, index) => {
    return <Answer text={answer.text} key={index} />;
  });

  return <div className={styles.grid}>{answerCOmponents}</div>;
}
