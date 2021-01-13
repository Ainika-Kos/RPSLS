import React from react;
import './button.scss';

type ButtonProps = {
  label: string;
  clickHandler: () => void;
};

export const Button = ({ label, clickHandler }: ButtonProps) => {
  return (
    <button type="button" className="button" onClick={clickHandler}>
      {label}
    </button>
  );
};
