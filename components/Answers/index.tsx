import Answer from '../Answer';
import styles from './Answers.module.css';

export default function Answers({ answers }) {
  if (!answers) return null;

  const AnswerComponents = answers.map((answer, index) => {
    return <Answer answer={answer} key={index} />;
  });

  return (
    <div className={styles.grid}>
      <AnswerComponents />
    </div>
  );
}
