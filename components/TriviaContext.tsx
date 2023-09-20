import { createContext } from 'react';
import triviaGame from '../trivia.json';

export type TriviaType = { triviaGame: any; revealAnswer: boolean };

export const TriviaContext = createContext<TriviaType>(null);

export const TriviaProvider = ({ children }) => {
  return (
    <TriviaContext.Provider
      value={{
        triviaGame,
        revealAnswer: false,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};
