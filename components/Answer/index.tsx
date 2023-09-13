import styles from './Answer.module.css';

export default function Answer({ text }) {
  return (
    <div className={styles.answer}>
      <p>{text}</p>
    </div>
  );
}
