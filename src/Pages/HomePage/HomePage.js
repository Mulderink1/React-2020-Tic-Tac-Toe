import React, { useContext } from 'react';
import AppContext from '../../Context/app-context'
import BlankBlock from '../../SharedComponents/BlankBlock';
import BlockComponent from './Components/BlockComponent';

export default () => {
  const context = useContext(AppContext);
  return (
    <div className="home-box">
      {context.blankBlock.map((element, index) => element ? <BlankBlock keyIndex={index} /> : <BlockComponent keyIndex={index} />) }
    </div>
  );
}