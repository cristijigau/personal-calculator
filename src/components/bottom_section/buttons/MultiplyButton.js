import React, { useContext } from 'react';

import { BLANK, MULTIPLY } from '../../../constants/Constants';
import CalculatorContext from '../../../contexts/CalculatorContext';

const MultiplyButton = ({
  setCurrentValue,
  displayValue,
  setWaitingValue,
  currentValue,
  operation,
  waitingValue,
  displayResult,
}) => {
  const { setOperation } = useContext(CalculatorContext);
  const multiply = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === MULTIPLY) {
          setCurrentValue(String(Number(currentValue) * Number(displayValue)));
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
