import React, { useContext } from 'react';
import AppContext from '../../../Context/app-context';


export default (props) => {
  const context = useContext(AppContext);

  return (
    <div className="box blank-box"
      onClick={
        () => {
          if (context.gameWin) { return };
          let dispatchObj;
          context.player1 ? dispatchObj = { index: props.keyIndex, xClicked: true } : dispatchObj = { index: props.keyIndex, xClicked: false };
          context.setXBlock(dispatchObj);
        }
      }
    >
      <h3>*</h3>
    </div>
  );
};