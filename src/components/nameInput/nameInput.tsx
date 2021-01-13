import React from 'react';
import { Button } from '../button/button';
import './nameInput.scss';

type NameInputProps = {
  value: string;
  placeholder: string;
  type: string;
  buttonName: string;
  onChange: (e: string) => void;
  clickHandler: () => void;
};

const NameInput = ({ value, placeholder, type, onChange, buttonName, clickHandler }: NameInputProps) => {
  return (
    <div className="nameInput-wrapper">
      <input
        type={type}
        className="nameInput__input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button
        label={buttonName}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default NameInput;
