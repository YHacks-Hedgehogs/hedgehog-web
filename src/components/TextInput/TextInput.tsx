import React from 'react';
import './TextInput.css';

interface TextInputProps {
  value: string,
  setValue: any,
  placeholder: string,
  type?: string
}

const TextInput = ({value, setValue, placeholder, type}:TextInputProps) => {
  return (
    <input type={type ? type : 'text'} className='text-input' value={value} onChange={(e) => {setValue(e.target.value)}} placeholder={placeholder}/>
  );
}

export default TextInput
