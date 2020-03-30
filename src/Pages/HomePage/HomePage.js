import React, { useContext } from 'react';
import AppContext from '../../Context/app-context'
import BlankBlock from '../../SharedComponents/BlankBlock';

export default () => {
  const context = useContext(AppContext)

  return (
    <div className="home-box">
      {context.blankBlock.map((element, index) => element ? <BlankBlock keyIndex={index} /> : null) }
    </div>
  );
}