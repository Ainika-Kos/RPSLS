import React from 'react';
import './setResult.scss';

type SetResultProps = {
  text: string;
};

const SetResult = ({ text }: SetResultProps) => {
  return (
    <div className="setResult">
      <p className="setResult__text">{text}</p>
    </div>
  );
};

export default SetResult;
