import React from 'react';

import {
  BLANK,
  DIVISION,
  MAX_CHARACTERS,
  MINUS,
  MULTIPLY,
  PERCENTAGE,
  PLUS,
} from '../../constants/Constants';
import {
  AllClearButton,
  CommaButton,
  DivisionButton,
  EqualsButton,
  MinusButton,
  MultiplyButton,
  PercentageButton,
  PlusButton,
  SignButton,
} from './buttons/index';

const Buttons = ({
  setDisplayValue,
  displayValue,
  waitingValue,
  setWaitingValue,
  setCurrentValue,
  currentValue,
  operation,
  setOperation,
}) => {
  const currentValueAsNumber = Number(currentValue);
  const displayValueAsNumber = Number(displayValue);
  const displayValueAsString = String(displayValue);

  const getButtonValue = value => {
    if (displayValue === 0 || waitingValue) {
      setDisplayValue(value);
      setWaitingValue(false);
    } else if (displayValueAsString.length < MAX_CHARACTERS)
      setDisplayValue(displayValueAsString + value);
  };

  const checkResultLength = result => {
    const resultAsString = String(result);
    if (resultAsString.length > MAX_CHARACTERS) {
      return resultAsString.slice(0, MAX_CHARACTERS - 1) + 'e';
    } else return result;
  };

  const setCalculatorState = value => {
    setDisplayValue(checkResultLength(value));
    setCurrentValue(value);
    setWaitingValue(true);
    setOperation(BLANK);
  };

  const displayResult = () => {
    switch (operation) {
      case PLUS:
        setCalculatorState(displayValueAsNumber + currentValueAsNumber);
        break;
      case MINUS:
        setCalculatorState(currentValue - displayValue);
        break;
      case MULTIPLY:
        setCalculatorState(currentValue * displayValue);
        break;
      case DIVISION:
        setCalculatorState(currentValue / displayValue);
        break;
      case PERCENTAGE:
        setCalculatorState(currentValue * displayValue);
        break;
    }
  };

  return (
    <div className="buttons">
      <AllClearButton
        setDisplayValue={setDisplayValue}
        setCurrentValue={setCurrentValue}
        setOperation={setOperation}
      />
      <SignButton
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        checkResultLength={checkResultLength}
      />
      <PercentageButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        currentValue={currentValue}
        setDisplayValue={setDisplayValue}
        checkResultLength={checkResultLength}
      />
      <DivisionButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
        setOperation={setOperation}
      />

      <button onClick={() => getButtonValue(7)}> 7 </button>
      <button onClick={() => getButtonValue(8)}> 8 </button>
      <button onClick={() => getButtonValue(9)}> 9 </button>

      <MultiplyButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
        setOperation={setOperation}
      />

      <button onClick={() => getButtonValue(4)}> 4 </button>
      <button onClick={() => getButtonValue(5)}> 5 </button>
      <button onClick={() => getButtonValue(6)}> 6 </button>

      <MinusButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
        setOperation={setOperation}
      />

      <button onClick={() => getButtonValue(1)}> 1 </button>
      <button onClick={() => getButtonValue(2)}> 2 </button>
      <button onClick={() => getButtonValue(3)}> 3 </button>

      <PlusButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
        setOperation={setOperation}
        currentValueAsNumber={currentValueAsNumber}
        displayValueAsNumber={displayValueAsNumber}
      />

      <button onClick={() => getButtonValue(0)}> 0 </button>

      <CommaButton
        setDisplayValue={setDisplayValue}
        displayValueAsString={displayValueAsString}
      />

      <EqualsButton displayResult={displayResult} />
    </div>
  );
};

export default Buttons;
