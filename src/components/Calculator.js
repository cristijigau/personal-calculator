import React, { useState } from 'react';

import { BLANK } from '../constants/Constants';
import Buttons from './bottom_section/Buttons';
import Display from './middle_section/Display';
import { Logo, SolarBattery } from './upper_section';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [waitingValue, setWaitingValue] = useState(false);
  const [operation, setOperation] = useState(BLANK);
  return (
    <div className="main-view">
      <div className="calculator-body">
        <div className="upper-section">
          <SolarBattery />
          <Logo />
        </div>
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
              setOperation={setOperation}
            />
          </div>
      </div>
    </div>
  );
};

export default Calculator;
