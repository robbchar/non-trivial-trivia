import styles from './Category.module.css';

export default function Category({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
