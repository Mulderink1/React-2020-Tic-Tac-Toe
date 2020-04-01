import React, { useReducer, useEffect } from 'react';
import AppContext from './app-context';
import AppReducer, { XCLICKED, STATE } from './reducers';

export default props => {
  const [appState, dispatch] = useReducer(AppReducer, {
    blankBlock: [],
    xBlock: [],
    oBlock: [],
    player1: true
  });

  const setInitionalState = state => {
    dispatch({ type: STATE, state: state })
  }

  const setXBlock = xClickedObj => {
    dispatch({ type: XCLICKED, xClickedObj: xClickedObj })
  };

  useEffect(() => {
    setInitionalState(appState);
  }, []);

  const GlobalState = {
    blankBlock: appState.blankBlock,
    xBlock: appState.xBlock,
    oBlock: appState.oBlock,
    player1: appState.player1,
    setXBlock: setXBlock
  }

  return (
    <AppContext.Provider value={GlobalState}>
      {props.children}
    </AppContext.Provider>
  );
};