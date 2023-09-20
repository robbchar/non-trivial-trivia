import styles from './TriviaQuestion.module.css';
import Answers from '../Answers';
import Question from '../Question';
import QuestionNav from '../QuestionNav';
import { useContext, useState } from 'react';
import { TriviaContext } from '../../components/TriviaContext';

export default function TriviaQuestion({ triviaQuestion }) {
  const context = useContext(TriviaContext);
  const [revealAnswer, setRevealAnswer] = useState(false);

  const handleKeyDown = (event) => {
    if (event.code === 'KeyA') {
      context.revealAnswer = !context.revealAnswer;
    }
    setRevealAnswer(context.revealAnswer);
  };

  const navigated = () => {
    setRevealAnswer(false);
  };

  const triviaQuestionJSX = !triviaQuestion ? null : (
    <div
      className={styles.TriviaQuestion}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Question question={triviaQuestion.question} />
      <Answers answers={triviaQuestion.answers} revealAnswer={revealAnswer} />
    </div>
  );

  return (
    <>
      <QuestionNav navigated={navigated} />
      {triviaQuestionJSX}
    </>
  );
}
