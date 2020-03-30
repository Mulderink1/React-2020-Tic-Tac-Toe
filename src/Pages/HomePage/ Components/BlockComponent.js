import React, { useContext } from 'react';
import AppContext from '../../../Context/app-context';
import OBlock from '../../../SharedComponents/OBlock';
import XBlock from '../../../SharedComponents/XBlock';

export default () => {
  const context = useContext(AppContext);
  const block = context.XBlock ? <XBlock /> : <OBlock />
  return (
    <div>
      {block}
    </div>
  );
};