import { useRef, useState } from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculate = () => {
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber("0");
    setPreviousNumber('0');
  }

  const buildNumer = (numberText: string) => {
    //No aceptar doble punto
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
      }
      // Evaluar si es otro cero y hay un punto
      else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      }
      //Evaluar si es diferente de cero y no tiene un punto
      else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      }
      //Evitar el 000.0
      else if (numberText === '0' && !numberText.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  }

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  }

  const buttonDel = () => {
    ((number.includes('-') && number.length === 2)
      || number.length === 1)
      ? setNumber('0')
      : setNumber(number => number.slice(0, -1))
  }

  const changeNumberForPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber("0");
  }

  const buttonDivide = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.divide;
  }

  const buttonMultiply = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.multiply;
  }

  const buttonAdd = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.add;
  }

  const buttonSubstract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.subtract;
  }

  const calculate = () => {
    const numberOne = Number(number);
    const numberTwo = Number(previousNumber);
    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${numberOne + numberTwo}`);
        break;
      case Operators.subtract:
        setNumber(`${numberTwo - numberOne}`);
        break;
      case Operators.multiply:
        setNumber(`${numberOne * numberTwo}`);
        break;
      case Operators.divide:
        setNumber(`${numberTwo / numberOne}`);
        break;
    }
    setPreviousNumber('0');
  }

  return {
    previousNumber,
    number,
    clean,
    positiveNegative,
    buttonDel,
    buttonAdd,
    buttonDivide,
    buildNumer,
    buttonMultiply,
    buttonSubstract,
    calculate
  }
}
