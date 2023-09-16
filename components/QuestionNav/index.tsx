import styles from './QuestionNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons';

export default function Nav({
  forwardQuestion,
  backwardQuestion,
  questionHome,
}) {
  return (
    <div className={styles.nav}>
      <div className={styles.button} onClick={forwardQuestion}>
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </div>
      <div className={styles.button} onClick={questionHome}>
        <FontAwesomeIcon icon={faTableCells} />
      </div>
      <div className={styles.button} onClick={backwardQuestion}>
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </div>
    </div>
  );
}
