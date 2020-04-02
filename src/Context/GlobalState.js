import React, { useReducer, useEffect } from 'react';
import AppContext from './app-context';
import AppReducer, { XCLICKED, BUILDSTATE, RESETSTATE, STARTGAME } from './reducers';

export default props => {
  const initionalReducerState = {
    blankBlock: [],
    xBlock: [],
    oBlock: [],
    player1: true,
    gameWin: false,
    gameStart: true
  };
  const [appState, dispatch] = useReducer(AppReducer, initionalReducerState);


  const setXBlock = xClickedObj => {
    dispatch({ type: XCLICKED, xClickedObj: xClickedObj });
  };

  const setStartGame = startGameBool => {
    dispatch({ type: STARTGAME, startGameBool: startGameBool });
  };

  const resetState = () => {
    dispatch({ type: RESETSTATE });
  };

  useEffect((appState) => {
    dispatch({ type: BUILDSTATE, state: appState });
  }, []);


  const GlobalState = {
    ...appState,
    setXBlock: setXBlock,
    setStartGame: setStartGame,
    resetState: resetState
  };

  return (
    <AppContext.Provider value={GlobalState}>
      {props.children}
    </AppContext.Provider>
  );
};