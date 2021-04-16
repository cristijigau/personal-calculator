import React, { useContext } from 'react';

import { BLANK, DIVISION } from '../../../constants/Constants';
import CalculatorContext from '../../../contexts/CalculatorContext';

const DivisionButton = ({
  setCurrentValue,
  setWaitingValue,
  displayValue,
  currentValue,
  operation,
  waitingValue,
  displayResult,
}) => {
  const { setOperation } = useContext(CalculatorContext);
  const divide = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === DIVISION) {
          setCurrentValue(String(Number(currentValue) / Number(displayValue)));
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
