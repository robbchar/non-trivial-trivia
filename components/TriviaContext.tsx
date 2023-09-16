import { createContext } from 'react';
import triviaGame from '../trivia.json';

export const TriviaContext = createContext(null);

export const TriviaProvider = ({ children }) => {
  return (
    <TriviaContext.Provider
      value={{
        triviaGame,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};
