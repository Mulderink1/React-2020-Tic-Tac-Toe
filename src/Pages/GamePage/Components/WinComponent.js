import React, { useContext } from 'react';
import AppContext from '../../../Context/app-context';

export default () => {
  const context = useContext(AppContext);

  return (
    <div>
      <h3>{ context.player1 ? "O" : "X" } Wins</h3>
      <button
        onClick={() => {
          context.resetState();
        }}
      >Start A New Game</button>
      <button
        onClick={() => {
          context.resetState();
          context.setStartGame(true);
        }}
      >End Game</button>
    </div>
  );
};