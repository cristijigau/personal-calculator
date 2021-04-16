import React, { useContext } from 'react';

import { BLANK, MINUS } from '../../../constants/Constants';
import CalculatorContext from '../../../contexts/CalculatorContext';

const MinusButton = ({
  setCurrentValue,
  setWaitingValue,
  displayValue,
  currentValue,
  operation,
  displayResult,
  waitingValue,
}) => {
  const { setOperation } = useContext(CalculatorContext);
  const subtract = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === MINUS) {
          setCurrentValue(String(Number(currentValue) - Number(displayValue)));
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
