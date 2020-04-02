import React from 'react';
import './App.css';
import GamePage from './Pages/GamePage/GamePage';
import StartPage from './Pages/StartPage/StartPage';

import GlobalState from './Context/GlobalState';
import AppContext from './Context/app-context';

export default () => {
  return (
    <div className="App">
      <GlobalState>
        <AppContext.Consumer>
          {context => {
            if (context.gameStart) {
              return <StartPage />
            }else {
              return <GamePage />
            }
          }}
        </AppContext.Consumer>
      </GlobalState>
    </div>
  );
};
