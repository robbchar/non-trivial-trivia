import styles from './Layout.module.css';
import Nav from '../Nav';

export default function Layout({ children }) {
  return (
    <div className={styles.grid}>
      <Nav />
      {children}
    </div>
  );
}
