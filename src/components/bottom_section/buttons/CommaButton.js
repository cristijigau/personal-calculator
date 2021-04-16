import React from 'react';

import { BLANK, DOT, MAX_CHARACTERS } from '../../../constants/Constants';

const CommaButton = ({ setDisplayValue, displayValue, calculateLength }) => {
  const addPrecision = () => {
    if (displayValue.indexOf(DOT) === -1) {
      calculateLength(displayValue) >= MAX_CHARACTERS
        ? setDisplayValue(displayValue.slice(1) + BLANK + DOT)
        : setDisplayValue(displayValue + BLANK + DOT);
    }
  };
  return (
    <button className="button operation" onClick={addPrecision}>
      ,
    </button>
  );
};

export default CommaButton;
