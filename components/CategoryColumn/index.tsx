import styles from './CategoryColumn.module.css';
import { useRouter } from 'next/navigation';

const goToQuestion = (router, categoryIndex, questionIndex) => {
  router.push({
    pathname: '/question/[categoryIndex]/[questionIndex]',
    query: { categoryIndex, questionIndex },
  });
};

const categoryClick = (router, categoryIndex) => {
  goToQuestion(router, categoryIndex, 0);
};

const questionClicked = (router, categoryIndex, questionIndex) => {
  goToQuestion(router, categoryIndex, questionIndex);
};

export default function CategoryColumn({ category, categoryIndex }) {
  const router = useRouter();

  return (
    <div className={styles.categoryColumn}>
      <div
        className={styles.categoryContainer}
        onClick={() => categoryClick(router, categoryIndex)}
      >
        <h1 className={styles.category}>{category.title}</h1>
      </div>
    </div>
  );
}
