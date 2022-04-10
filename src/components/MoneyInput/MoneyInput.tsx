import React from 'react';
import './MoneyInput.css';

interface MoneyInputProps {
  value: number,
  setValue: any,
  min?: number,
}

const MoneyInput = ({value, setValue, min}:MoneyInputProps) => {
  let formattedValue = value.toLocaleString('en-US', {maximumFractionDigits: 2});
  if (value < 1) {
    formattedValue = '';
  }

  return (
    <p className='money-input-container'>$ <input type='number' className='money-input' value={formattedValue} onChange={(e) => {setValue(e.target.value)}} min={min ? min : 0} placeholder='0.00'/></p>
  );
}

export default MoneyInput;
