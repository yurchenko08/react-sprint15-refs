/* eslint-disable no-fallthrough */
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './input.css';

function Input() {
  const [operatorNumber, setOperatorNumber] = useState('');
  const [num, setNum] = useState('');
  const [isOperatorNum, setIsOperatorNum] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const inputRef = useRef();
  //subtask2
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //subtask1
  const handleInputOperator = (e) => {
    setOperatorNumber(e.target.value.replace(/[^0-9]/g, ''));
  };
  useEffect(() => {
    if (operatorNumber.length === 2) {
      setIsOperatorNum(true);
    } else setIsOperatorNum(false);
  }, [operatorNumber]);
  //subtask4
  useEffect(() => {
    if (num.length === 7) {
      setIsNum(true);
    } else setIsNum(false);
  }, [num]);

  const handleChangeNum = (e) => {
    setNum(e.target.value.replace(/[^0-9]/g, ''));
    //subtask4
    if (num.length === 7) {
      setIsNum(true);
    } else {
      setIsNum(false);
    }
  };

  //subtask3
  const operators = {
    Kyivstar: ['67', '68', '96', '97', '98'],
    Vodafone: ['50', '66', '95', '99'],
    Lifecell: ['63', '73', '93'],
    '3mob': ['91'],
    'People.net': ['92'],
    intertelecom: ['89', '94'],
  };
  const searchOperator = (operatorNumber) => {
    for (const operator in operators) {
      if (operatorNumber && operators[operator].includes(operatorNumber))
        return operator;
      continue;
    }
  };

  return (
    <div>
      <span data-testid='operator-name'>
        {isOperatorNum && (searchOperator(operatorNumber) || 'Unknown')}
      </span>
      <span> +38 0</span>
      <input
        ref={inputRef}
        onInput={handleInputOperator}
        type='text'
        data-testid='operator-input'
      />
      <span data-testid='check-icon'>
        {isNum && isOperatorNum ? '✔️' : ' - '}
      </span>
      <input onInput={handleChangeNum} type='text' data-testid='phone-input' />
    </div>
  );
}
export default Input;
