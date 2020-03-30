import React from 'react';
import AppContext from './app-context';

export default props => {
  const GlobalState = {
    blankBlock: [],
    oBlock: [],
    xBlock: []
  };

  for (let i = 0; i < 9; i += 1) {
    GlobalState.blankBlock.push(true);
    GlobalState.oBlock.push(false);
    GlobalState.xBlock.push(false);
  };

  return (
    <AppContext.Provider value={GlobalState}>
      {props.children}
    </AppContext.Provider>
  );
};