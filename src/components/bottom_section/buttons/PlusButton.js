import React from 'react';

import { BLANK, PLUS } from '../../../constants/Constants';

const PlusButton = ({
  displayValue,
  setWaitingValue,
  setCurrentValue,
  currentValue,
  waitingValue,
  operation,
  displayResult,
  setOperation
}) => {

  const add = () => {
    if (!waitingValue) {
      if (operation !== BLANK) {
        displayResult();
        if (operation === PLUS) {
          setCurrentValue(Number(currentValue) + Number(displayValue));
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
