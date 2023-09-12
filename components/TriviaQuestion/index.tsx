import styles from './TriviaQuestion.module.css';
import Answers from '../Answers';
import Question from '../Question';

export default function TriviaQuestion({ triviaQuestion }) {
  return (
    <div className={styles.TriviaQuestion}>
      <Question question={triviaQuestion.question} />
      <Answers answers={triviaQuestion.answers} />
    </div>
  );
}
