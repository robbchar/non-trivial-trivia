import Answer from '../Answer';
import styles from './Answers.module.css';

export default function Answers({ answers, revealAnswer }) {
  if (!answers) return null;

  const answerComponents = answers.map((answer, index) => {
    return <Answer answer={answer} key={index} revealAnswer={revealAnswer} />;
  });

  return <div className={styles.grid}>{answerComponents}</div>;
}
