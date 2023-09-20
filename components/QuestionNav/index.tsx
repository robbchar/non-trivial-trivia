import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faTableCells,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { TriviaContext } from '../TriviaContext';
import { useContext } from 'react';
import NavHeader from '../NavHeader';

export default function Nav({ navigated }) {
  const context = useContext(TriviaContext);
  const router = useRouter();
  const { categoryIndex = 0, questionIndex = 0 } = router.query;

  const goQuestionHome = () => {
    router.push('/questions');
    navigated();
  };

  const goTeamHome = () => {
    router.push('/teams');
    navigated();
  };

  const goForwardQuestion = () => {
    if (
      Number.parseInt(questionIndex) <
      context.triviaGame.categories[Number.parseInt(categoryIndex)].questions
        .length -
        1
    ) {
      router.push({
        pathname: '/question/[categoryIndex]/[questionIndex]',
        query: {
          categoryIndex,
          questionIndex: Number.parseInt(questionIndex) + 1,
        },
      });
      navigated();
    } else {
      if (
        Number.parseInt(categoryIndex) ===
        context.triviaGame.categories.length - 1
      ) {
        goQuestionHome();
      } else if (
        Number.parseInt(categoryIndex) <
        context.triviaGame.categories.length - 1
      ) {
        router.push({
          pathname: '/question/[categoryIndex]/[questionIndex]',
          query: {
            categoryIndex: Number.parseInt(categoryIndex) + 1,
            questionIndex: 0,
          },
        });
        navigated();
      }
    }
  };

  const goBackwardQuestion = () => {
    if (
      Number.parseInt(questionIndex) > 0 &&
      context.triviaGame.categories[Number.parseInt(categoryIndex)].questions
        .length - 1
    ) {
      router.push({
        pathname: '/question/[categoryIndex]/[questionIndex]',
        query: {
          categoryIndex,
          questionIndex: Number.parseInt(questionIndex) - 1,
        },
      });
    } else {
      if (Number.parseInt(categoryIndex) === 0) {
        goQuestionHome();
      } else {
        router.push({
          pathname: '/question/[categoryIndex]/[questionIndex]',
          query: {
            categoryIndex: Number.parseInt(categoryIndex) - 1,
            questionIndex:
              context.triviaGame.categories[Number.parseInt(categoryIndex - 1)]
                .questions.length - 1,
          },
        });
      }
    }
  };

  return (
    <NavHeader>
      <div onClick={goBackwardQuestion}>
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </div>
      <div onClick={goQuestionHome}>
        <FontAwesomeIcon icon={faTableCells} />
      </div>
      <div onClick={goTeamHome}>
        <FontAwesomeIcon icon={faCubes} />
      </div>
      <div onClick={goForwardQuestion}>
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </div>
    </NavHeader>
  );
}
