import React from 'react';

import { BLANK, DOT } from '../../../constants/Constants';

const CommaButton = ({ setDisplayValue, displayValueAsString }) => {
  const addPrecision = () => {
    if (displayValueAsString .indexOf(DOT) === -1) {
      setDisplayValue(displayValueAsString + BLANK + DOT);
    }
  };
  return (
    <button className="button operation" onClick={addPrecision}>
      ,
    </button>
  );
};

export default CommaButton;
