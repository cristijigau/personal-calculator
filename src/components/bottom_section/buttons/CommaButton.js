import React from 'react';

import { BLANK, DOT } from '../../../constants/Constants';

const CommaButton = ({ setDisplayValue, displayValue }) => {
  const addPrecision = () => {
    const displayValueAsString = String(displayValue);
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
