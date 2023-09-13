import styles from './CategoryColumn.module.css';
import Category from '../Category';

export default function CategoryColumn({ category }) {
  return (
    <div className={styles.categoryColumn}>
      <div className={styles.categoryContainer}>
        <h1 className={styles.category}>{category.title}</h1>
      </div>
      {category.questions.map((question, index) => (
        <div className={styles.question} key={index}>
          {index}
        </div>
      ))}
    </div>
  );
}
