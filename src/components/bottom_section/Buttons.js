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

  const handleButtonClick = ({ target: { value } }) => {
    getButtonValue(value);
  };

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

  const displayResult = () => {
    switch (operation) {
      case PLUS:
        setDisplayValue(
          checkResultLength(displayValueAsNumber + currentValueAsNumber)
        );
        setCurrentValue(displayValueAsNumber + currentValueAsNumber);
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case MINUS:
        setDisplayValue(checkResultLength(currentValue - displayValue));
        setCurrentValue(currentValue - displayValue);
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case MULTIPLY:
        setDisplayValue(checkResultLength(currentValue * displayValue));
        setCurrentValue(currentValue * displayValue);
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case DIVISION:
        setDisplayValue(checkResultLength(currentValue / displayValue));
        setCurrentValue(currentValue / displayValue);
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case PERCENTAGE:
        setDisplayValue(checkResultLength(currentValue * displayValue));
        setWaitingValue(true);
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

      <input type="button" value={7} onClick={handleButtonClick} />
      <input type="button" value={8} onClick={handleButtonClick} />
      <input type="button" value={9} onClick={handleButtonClick} />

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

      <input type="button" value={4} onClick={handleButtonClick} />
      <input type="button" value={5} onClick={handleButtonClick} />
      <input type="button" value={6} onClick={handleButtonClick} />

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

      <input type="button" value={1} onClick={handleButtonClick} />
      <input type="button" value={2} onClick={handleButtonClick} />
      <input type="button" value={3} onClick={handleButtonClick} />

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

      <input type="button" value={0} onClick={handleButtonClick} />

      <CommaButton
        setDisplayValue={setDisplayValue}
        displayValueAsString={displayValueAsString}
      />

      <EqualsButton displayResult={displayResult} />
    </div>
  );
};

export default Buttons;
