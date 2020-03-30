import React from 'react';

export default (props) => {
  return (
    <div className="box blank-box"
      onClick={
        () => {
          console.log(props.keyIndex)
        }
      }
    >
    </div>
  );
};