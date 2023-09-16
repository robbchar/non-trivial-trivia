import { useRouter } from 'next/router';
import TriviaQuestion from '../../../components/TriviaQuestion';
import { TriviaContext } from '../../../components/TriviaContext';
import { useContext } from 'react';

export default function Question() {
  const context = useContext(TriviaContext);
  const router = useRouter();
  const { categoryIndex = 0, questionIndex = 0 } = router.query;

  const category =
    context.triviaGame.categories[Number.parseInt(categoryIndex)];
  const question = category.questions[Number.parseInt(questionIndex)];
  return <TriviaQuestion triviaQuestion={question} />;
}
