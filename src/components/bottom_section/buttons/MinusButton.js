import React from 'react';

import { BLANK, MINUS } from '../../../constants/Constants';

const MinusButton = ({
  setCurrentValue,
  setWaitingValue,
  displayValue,
  currentValue,
  operation,
  displayResult,
  waitingValue,
  setOperation
}) => {
  const subtract = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === MINUS) {
          setCurrentValue(currentValue - displayValue);
        }
        setWaitingValue(true);
      } else setCurrentValue(displayValue);
      setWaitingValue(true);
    }
    setOperation(MINUS);
  };
  return (
    <button className="button operation" onClick={subtract}>
      <i className="fas fa-minus"></i>
    </button>
  );
};

export default MinusButton;
