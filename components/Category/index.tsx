import styles from './Category.module.css';

export default function Category({ category }) {
  return (
    <div className={styles.category}>
      <h1>{category}</h1>
    </div>
  );
}
