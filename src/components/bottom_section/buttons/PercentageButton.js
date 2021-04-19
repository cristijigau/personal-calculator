import React from 'react';

const PercentageButton = ({
  displayValue,
  setWaitingValue,
  setDisplayValue,
  currentValue,
  checkResultLength,
}) => {
  const percentage = () => {
    if (currentValue === 0) {
      setDisplayValue(checkResultLength(displayValue / 100));
    } else
      setDisplayValue(checkResultLength((displayValue * currentValue) / 100));
    setWaitingValue(true);
  };
  return (
    <button className="button operation" onClick={percentage}>
      <i className="fas fa-percentage"></i>
    </button>
  );
};

export default PercentageButton;
