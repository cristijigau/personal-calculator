import React from 'react';

import { BLANK, DIVISION } from '../../../constants/Constants';

const DivisionButton = ({
  setCurrentValue,
  setWaitingValue,
  displayValue,
  currentValue,
  operation,
  waitingValue,
  displayResult,
  setOperation
}) => {
  const divide = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === DIVISION) {
          setCurrentValue(currentValue / displayValue);
        }
        setWaitingValue(true);
      } else setCurrentValue(displayValue);
      setWaitingValue(true);
    }
    setOperation(DIVISION);
  };
  return (
    <button className="button operation" onClick={divide}>
      <i className="fas fa-divide"></i>
    </button>
  );
};

export default DivisionButton;
