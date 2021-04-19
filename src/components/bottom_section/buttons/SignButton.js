import React from 'react';

const SignButton = ({ displayValue, setDisplayValue, checkResultLength }) => {
  const toggleSign = () => {
   setDisplayValue(checkResultLength(displayValue * -1));
  };
  return (
    <button className="button operation" onClick={toggleSign}>
      ±
    </button>
  );
};

export default SignButton;
