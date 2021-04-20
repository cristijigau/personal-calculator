import React from 'react';

import { BLANK, MULTIPLY } from '../../../constants/Constants';

const MultiplyButton = ({
  setCurrentValue,
  displayValue,
  setWaitingValue,
  currentValue,
  operation,
  waitingValue,
  displayResult,
  setOperation
}) => {
  const multiply = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === MULTIPLY) {
          setCurrentValue(currentValue * displayValue);
        }
        setWaitingValue(true);
      } else setCurrentValue(displayValue);
      setWaitingValue(true);
    }
    setOperation(MULTIPLY);
  };
  return (
    <button className="button operation" onClick={multiply}>
      <i className="fas fa-times"></i>
    </button>
  );
};

export default MultiplyButton;
