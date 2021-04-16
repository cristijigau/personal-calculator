import { createContext } from 'react';

const CalculatorContext = createContext({
  setOperation: () => {},
});

export default CalculatorContext;
