import React, { useState } from 'react';

import { BLANK, ZERO } from '../constants/Constants';
import CalculatorContext from '../contexts/CalculatorContext';
import Buttons from './bottom_section/Buttons';
import Display from './middle_section/Display';
import { Logo, SolarBattery } from './upper_section';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(ZERO);
  const [currentValue, setCurrentValue] = useState(ZERO);
  const [waitingValue, setWaitingValue] = useState(false);
  const [operation, setOperation] = useState(BLANK);
  return (
    <div className="calculator-body">
      <div className="upper-section">
        <SolarBattery />
        <Logo />
      </div>
      <CalculatorContext.Provider value={{ setOperation }}>
        <div className="middle-section">
          <Display
            displayValue={displayValue}
            waitingValue={waitingValue}
            currentValue={currentValue}
          />
        </div>
        <div className="bottom-section">
          <Buttons
            setDisplayValue={setDisplayValue}
            displayValue={displayValue}
            waitingValue={waitingValue}
            setWaitingValue={setWaitingValue}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            operation={operation}
          />
        </div>
      </CalculatorContext.Provider>
    </div>
  );
};

export default Calculator;
