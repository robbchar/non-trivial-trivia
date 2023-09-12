import styles from './QuestionNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.button}>
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </div>
      <div className={styles.button}>
        <FontAwesomeIcon icon={faTableCells} />
      </div>
      <div className={styles.button}>
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </div>
    </div>
  );
}
