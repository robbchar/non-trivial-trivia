import { useContext } from 'react';
import styles from './GameLayout.module.css';
import CategoryColumn from '../CategoryColumn';
import { TriviaContext } from '../TriviaContext';
import NavHeader from '../NavHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function GameLayout() {
  const context = useContext(TriviaContext);
  const router = useRouter();

  const goTeamHome = () => {
    router.push('/teams');
  };

  return (
    <>
      <NavHeader>
        <div onClick={goTeamHome}>
          <FontAwesomeIcon icon={faCubes} />
        </div>
      </NavHeader>
      <div className="content">
        <div className={styles.layout}>
          {context.triviaGame.categories.map((category, index) => (
            <CategoryColumn
              category={category}
              categoryIndex={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
