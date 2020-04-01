import React, { useContext } from 'react';
import AppContext from '../../../Context/app-context';
import OBlock from '../../../SharedComponents/OBlock';
import XBlock from '../../../SharedComponents/XBlock';

export default props => {
  const context = useContext(AppContext);

  const block = context.xBlock[props.keyIndex] ? <XBlock keyIndex={ props.keyIndex } /> : <OBlock keyIndex={ props.keyIndex } />
  return (
    <div>
      {block}
    </div>
  );
};