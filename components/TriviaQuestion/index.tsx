import styles from './TriviaQuestion.module.css';
import Answers from '../Answers';
import Question from '../Question';
import QuestionNav from '../QuestionNav';

export default function TriviaQuestion({ triviaQuestion }) {
  return (
    <>
      <QuestionNav />
      <div className={styles.TriviaQuestion}>
        <Question question={triviaQuestion.question} />
        <Answers answers={triviaQuestion.answers} />
      </div>{' '}
    </>
  );
}
