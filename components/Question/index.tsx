import styles from './Question.module.css';

export default function Question({ question }) {
  return (
    <div className={styles.question}>
      <h1>{question}</h1>
    </div>
  );
}
