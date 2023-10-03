import styles from './TeamName.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCaretUp,
  faSquareCaretDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function TeamName({
  name,
  points,
  index,
  updateTeam,
  removeTeam,
}) {
  const [isEditing, setIsEditing] = useState(!name);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setIsEditing(false);
      updateTeam(index, event.target.value, 0);
    }
  };

  const handleTeamClick = (e) => {
    switch (e.detail) {
      case 2:
        setIsEditing(true);
        break;
    }
  };

  const handlePointsClick = (upOrDown) => {
    if (upOrDown === 'up') {
      updateTeam(index, name, Number.parseInt(points) + 1);
    } else if (upOrDown === 'down' && Number.parseInt(points) > 0) {
      updateTeam(index, name, Number.parseInt(points) - 1);
    }
  };

  return (
    <li className={styles.content}>
      {isEditing ? (
        <input
          className={styles.teamName}
          type="text"
          placeholder="Team Name"
          defaultValue={name}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <h2 className={styles.teamName} onClick={handleTeamClick}>
          {name}
        </h2>
      )}
      <div className={styles.numberContainer}>
        <div className={styles.number}>
          <span>{points}</span>
        </div>
        <div className={styles.pointsButtonContainer}>
          <div
            className={styles.increment}
            onClick={() => handlePointsClick('up')}
          >
            <FontAwesomeIcon icon={faSquareCaretUp} />
          </div>
          <div className={styles.decrement}>
            <FontAwesomeIcon
              icon={faSquareCaretDown}
              onClick={() => handlePointsClick('down')}
            />
          </div>
        </div>

        <div className={styles.removeTeam}>
          <FontAwesomeIcon icon={faTimes} onClick={() => removeTeam(name)} />
        </div>
      </div>
    </li>
  );
}
