import { useContext } from 'react';
import styles from './GameLayout.module.css';
import CategoryColumn from '../CategoryColumn';
import { TriviaContext } from '../TriviaContext';

export default function GameLayout() {
  const context = useContext(TriviaContext);

  return (
    <div className={styles.container}>
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
  );
}
