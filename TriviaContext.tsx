import { createContext } from 'react';

export const TriviaContext = createContext(null);

export const TriviaProvider = ({ children }) => {
  return (
    <TriviaContext.Provider
      value={{
        gameJson: {},
        currentQuestion: 1,
        currentCategory: 1,
        message: 'heya',
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};
