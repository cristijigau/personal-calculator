import React, { useContext } from 'react';

import {
  BLANK,
  DIVISION,
  DOT,
  MAX_CHARACTERS,
  MINUS,
  MULTIPLY,
  PERCENTAGE,
  PLUS,
  ZERO,
} from '../../constants/Constants';
import CalculatorContext from '../../contexts/CalculatorContext';
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
}) => {
  const { setOperation } = useContext(CalculatorContext);
  const calculateLength = str => {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
      length += str.charAt(i) === '1' ? 0.36 : 1;
    }
    return length;
  };
  const getButtonValue = value => {
    if (displayValue === ZERO) setDisplayValue(value);
    else if (calculateLength(displayValue) < MAX_CHARACTERS) {
      setDisplayValue(displayValue + BLANK + value);
    }
    if (waitingValue) {
      setDisplayValue(value);
      setWaitingValue(false);
    }
  };

  const checkResultLength = (result, division) => {
    if (!division && String(result).indexOf(DOT) === -1) {
      if (calculateLength(String(result)) > MAX_CHARACTERS) {
        if (String(result)[0] !== MINUS)
          return String(result).slice(String(result).length - MAX_CHARACTERS);
        else
          return (
            MINUS +
            String(result).slice(String(result).length - MAX_CHARACTERS - 1)
          );
      } else return String(result);
    } else {
      if (calculateLength(String(result)) > MAX_CHARACTERS) {
        if (String(result)[0] !== MINUS)
          return String(result).slice(0, MAX_CHARACTERS);
        else return String(result).slice(0, MAX_CHARACTERS);
      } else return String(result);
    }
  };

  const displayResult = () => {
    switch (operation) {
      case PLUS:
        setDisplayValue(
          checkResultLength(Number(currentValue) + Number(displayValue))
        );
        setCurrentValue(String(Number(currentValue) + Number(displayValue)));
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case MINUS:
        setDisplayValue(
          checkResultLength(Number(currentValue) - Number(displayValue))
        );
        setCurrentValue(String(Number(currentValue) - Number(displayValue)));
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case MULTIPLY:
        setDisplayValue(
          checkResultLength(Number(currentValue) * Number(displayValue))
        );
        setCurrentValue(String(Number(currentValue) * Number(displayValue)));
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case DIVISION:
        setDisplayValue(
          checkResultLength(Number(currentValue) / Number(displayValue), true)
        );
        setCurrentValue(String(Number(currentValue) / Number(displayValue)));
        setWaitingValue(true);
        setOperation(BLANK);
        break;
      case PERCENTAGE:
        setDisplayValue(
          checkResultLength(Number(currentValue) * Number(displayValue))
        );
        setWaitingValue(true);
        break;
    }
  };

  return (
    <div className="buttons">
      <AllClearButton
        setDisplayValue={setDisplayValue}
        setCurrentValue={setCurrentValue}
      />
      <SignButton
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        calculateLength={calculateLength}
      />
      <PercentageButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        setDisplayValue={setDisplayValue}
        calculateLength={calculateLength}
      />
      <DivisionButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
      />

      <button className="button" onClick={() => getButtonValue('7')}>
        7
      </button>
      <button className="button" onClick={() => getButtonValue('8')}>
        8
      </button>
      <button className="button" onClick={() => getButtonValue('9')}>
        9
      </button>

      <MultiplyButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
      />

      <button className="button" onClick={() => getButtonValue('4')}>
        4
      </button>
      <button className="button" onClick={() => getButtonValue('5')}>
        5
      </button>
      <button className="button" onClick={() => getButtonValue('6')}>
        6
      </button>

      <MinusButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
      />

      <button className="button" onClick={() => getButtonValue('1')}>
        1
      </button>
      <button className="button" onClick={() => getButtonValue('2')}>
        2
      </button>
      <button className="button" onClick={() => getButtonValue('3')}>
        3
      </button>

      <PlusButton
        displayValue={displayValue}
        setWaitingValue={setWaitingValue}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        operation={operation}
        waitingValue={waitingValue}
        displayResult={displayResult}
      />

      <button className="button" onClick={() => getButtonValue(ZERO)}>
        0
      </button>
      <CommaButton
        setDisplayValue={setDisplayValue}
        displayValue={displayValue}
        calculateLength={calculateLength}
      />

      <EqualsButton displayResult={displayResult} />
    </div>
  );
};

export default Buttons;
