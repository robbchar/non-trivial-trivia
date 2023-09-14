import styles from './CategoryColumn.module.css';

const categoryClick = () => {
  console.log('category clicked');
};

const questionClicked = () => {
  console.log('question clicked');
};

export default function CategoryColumn({ category }) {
  return (
    <div className={styles.categoryColumn}>
      <div className={styles.categoryContainer} onClick={() => categoryClick()}>
        <h1 className={styles.category}>{category.title}</h1>
      </div>
      {category.questions.map((question, index) => (
        <div
          className={styles.question}
          key={index}
          onClick={() => questionClicked()}
        >
          {question.question}
        </div>
      ))}
    </div>
  );
}
