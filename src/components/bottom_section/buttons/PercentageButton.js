import React from 'react';

import { MAX_CHARACTERS, ZERO } from '../../../constants/Constants';

const PercentageButton = ({
  displayValue,
  setWaitingValue,
  setDisplayValue,
  currentValue,
  calculateLength,
}) => {
  const percentage = () => {
    if (currentValue === ZERO) {
      setDisplayValue(
        calculateLength(String(Number(displayValue) / 100)) > MAX_CHARACTERS
          ? String(Number(displayValue) / 100).slice(0, MAX_CHARACTERS)
          : String(Number(displayValue) / 100)
      );
    } else
      setDisplayValue(
        calculateLength(
          String(Number(displayValue) * Number(currentValue / 100))
        ) > MAX_CHARACTERS
          ? String(Number(displayValue) * Number(currentValue / 100)).slice(
              0,
              MAX_CHARACTERS
            )
          : String(Number(displayValue) * Number(currentValue / 100))
      );
    setWaitingValue(true);
  };
  return (
    <button className="button operation" onClick={percentage}>
      <i className="fas fa-percentage"></i>
    </button>
  );
};

export default PercentageButton;
