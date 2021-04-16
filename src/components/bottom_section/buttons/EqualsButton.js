import React from 'react';

const EqualsButton = ({ displayResult }) => {
  return (
    <button className="button operation" onClick={displayResult}>
      <i className="fas fa-equals"></i>
    </button>
  );
};

export default EqualsButton;
