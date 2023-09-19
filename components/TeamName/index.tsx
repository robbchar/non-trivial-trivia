import styles from './TeamName.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCaretUp,
  faSquareCaretDown,
} from '@fortawesome/free-solid-svg-icons';

export default function TeamName() {
  return (
    <div className={styles.content}>
      <input className={styles.nameInput} type="text" placeholder="Team Name" />
      <div className={styles.numberContainer}>
        <div className={styles.number}>
          <span>0</span>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.increment}>
            <FontAwesomeIcon icon={faSquareCaretUp} />
          </div>
          <div className={styles.decrement}>
            <FontAwesomeIcon icon={faSquareCaretDown} />
          </div>
        </div>
      </div>
    </div>
  );
}
