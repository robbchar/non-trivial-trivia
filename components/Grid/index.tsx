import Tile from '../Tile';
import styles from './Grid.module.css';

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
