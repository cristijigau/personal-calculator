import React, { useContext } from 'react';

import { BLANK, PLUS } from '../../../constants/Constants';
import CalculatorContext from '../../../contexts/CalculatorContext';

const PlusButton = ({
  displayValue,
  setWaitingValue,
  setCurrentValue,
  currentValue,
  waitingValue,
  operation,
  displayResult,
}) => {
  const { setOperation } = useContext(CalculatorContext);
  const add = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === PLUS) {
          setCurrentValue(String(Number(currentValue) + Number(displayValue)));
        }
        setWaitingValue(true);
      } else setCurrentValue(displayValue);
      setWaitingValue(true);
    }
    setOperation(PLUS);
  };
  return (
    <button className="button operation" onClick={add}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default PlusButton;
