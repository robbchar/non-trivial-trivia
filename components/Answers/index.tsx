import Tile from '../Answer';
import styles from './Answers.module.css';

export default function Home() {
  return (
    <div className={styles.grid}>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
}
