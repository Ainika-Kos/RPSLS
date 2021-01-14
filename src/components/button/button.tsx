import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './button.scss';

type ButtonProps = {
  icon: IconDefinition;
  size: string;
  clickHandler: () => void;
};

const Button = ({ icon, clickHandler, size }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button ${size === 'small' ? 'small' : ''}`}
      onClick={clickHandler}
    >
      <FontAwesomeIcon icon={icon} size={size === 'small' ? '3x' : '4x'} className="button__icon" />
    </button>
  );
};

export default Button;
