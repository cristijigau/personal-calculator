import React from 'react';

import { MAX_CHARACTERS } from '../../../constants/Constants';

const SignButton = ({ displayValue, setDisplayValue, calculateLength }) => {
  const toggleSign = () => {
    calculateLength(displayValue) >= MAX_CHARACTERS
      ? setDisplayValue(String(displayValue.slice(1) * -1))
      : setDisplayValue(String(displayValue * -1));
  };
  return (
    <button className="button operation" onClick={toggleSign}>
      ±
    </button>
  );
};

export default SignButton;
