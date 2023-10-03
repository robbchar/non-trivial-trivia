import styles from './TeamLayout.module.css';
import NavHeader from '../NavHeader';
import TeamName from '../TeamName';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function TeamLayout() {
  const [teamsData, setTeamsData] = useState({ teams: [] });
  const router = useRouter();

  useEffect(() => {
    setTeamsData(
      window.localStorage.getItem('teamsData')
        ? JSON.parse(window.localStorage.getItem('teamsData'))
        : { teams: [] },
    );
  }, []);

  const goQuestionsHome = () => {
    router.push('/questions');
  };

  const sortTeams = () => {
    teamsData.teams = teamsData.teams.sort((a, b) =>
      a.points > b.points ? -1 : 1,
    );
    setTeamsData(JSON.parse(JSON.stringify(teamsData)));
    saveData();
  };

  const addTeam = () => {
    teamsData.teams.push({ name: '', points: 0 });
    setTeamsData(JSON.parse(JSON.stringify(teamsData)));
  };

  const removeTeam = (name) => {
    teamsData.teams = teamsData.teams.filter((team) => team.name !== name);
    saveData();
    setTeamsData(JSON.parse(JSON.stringify(teamsData)));
  };

  const updateTeam = (index, name, points) => {
    if (name === '') return;

    if (teamsData.teams.length === 0) {
      teamsData.teams.push({ name, points });
    } else {
      teamsData.teams[index].name = name;
      teamsData.teams[index].points = points;
    }
    saveData();
    setTeamsData(JSON.parse(JSON.stringify(teamsData)));
    renderTeams();
  };

  const saveData = () => {
    window.localStorage.setItem('teamsData', JSON.stringify(teamsData));
  };

  const renderTeams = () => {
    return teamsData.teams.length === 0 ? (
      <TeamName
        name={'Temp Name'}
        points="0"
        index="0"
        updateTeam={updateTeam}
        removeTeam={removeTeam}
      />
    ) : (
      teamsData.teams.map((team, index) => (
        <TeamName
          name={team.name}
          points={team.points}
          index={index}
          updateTeam={updateTeam}
          removeTeam={removeTeam}
          key={index}
        />
      ))
    );
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
          <ul className={styles.namesContainer}>{renderTeams()}</ul>
          <div className={styles.buttonsContainer}>
            <div className={styles.button} onClick={sortTeams}>
              Sort
            </div>
            <div className={styles.button} onClick={addTeam}>
              Add Team
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
