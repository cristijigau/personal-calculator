import React from 'react';

import { BLANK } from '../../../constants/Constants';

const AllClearButton = ({ setDisplayValue, setCurrentValue, setOperation }) => {
  const clearAll = () => {
    setDisplayValue(0);
    setCurrentValue(0);
    setOperation(BLANK);
  };
  return (
    <button className="button operation" onClick={clearAll}>
      AC
    </button>
  );
};

export default AllClearButton;
