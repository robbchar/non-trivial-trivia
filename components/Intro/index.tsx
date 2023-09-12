import styles from './Intro.module.css';
import { TriviaContext } from '../../TriviaContext';
import { useContext } from 'react';

export default function Intro() {
  const Trivia = useContext(TriviaContext);

  return <span>{Trivia.message}</span>;
}
