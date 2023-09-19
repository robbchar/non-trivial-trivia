import styles from './TeamLayout.module.css';
import NavHeader from '../NavHeader';
import TeamName from '../TeamName';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';

export default function TeamLayout() {
  const router = useRouter();

  const goQuestionsHome = () => {
    router.push('/questions');
  };

  return (
    <>
      <NavHeader>
        <div onClick={goQuestionsHome}>
          <FontAwesomeIcon icon={faTableCells} />
        </div>
      </NavHeader>
      <div className={styles.content}>
        <div className={styles.teamsContainer}>
          <div className={styles.namesContainer}>
            <TeamName />
            <TeamName />
          </div>
          <div className={styles.buttonsContainer}>button 1</div>
        </div>
      </div>
    </>
  );
}
