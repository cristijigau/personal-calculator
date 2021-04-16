import React, { useContext } from 'react';

import { BLANK, ZERO } from '../../../constants/Constants';
import CalculatorContext from '../../../contexts/CalculatorContext';

const AllClearButton = ({ setDisplayValue, setCurrentValue }) => {
  const { setOperation } = useContext(CalculatorContext);
  const clearAll = () => {
    setDisplayValue(ZERO);
    setCurrentValue(ZERO);
    setOperation(BLANK);
  };
  return (
    <button className="button operation" onClick={clearAll}>
      AC
    </button>
  );
};

export default AllClearButton;
