import React, { useContext } from 'react';
import AppContext from '../../../Context/app-context';
import OBlock from './OBlock';
import XBlock from './XBlock';

export default props => {
  const context = useContext(AppContext);

  return (
    <div>
      { context.xBlock[props.keyIndex] ? <XBlock keyIndex={props.keyIndex} /> : <OBlock keyIndex={props.keyIndex} /> }
    </div>
  );
};