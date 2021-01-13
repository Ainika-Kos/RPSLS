import React from 'react';
import './nameInput.scss';

type NameInputProps = {
  value: string;
  placeholder: string;
  type: string;
  onChange: (e: string) => void;
};

const NameInput = ({ value, placeholder, type, onChange }: NameInputProps) => {
  return (
    <input
      type={type}
      className="nameInput"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default NameInput;
