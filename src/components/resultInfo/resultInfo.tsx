import React from 'react';
import './resultInfo.scss';
import { ResultType } from '../../data/types';


type ResultInfoProps = {
  result: ResultType;
};

const ResultInfo = ({ result }: ResultInfoProps) => {
  return (
    <div className="resultInfo">
      <p className={`resultInfo__text ${result.message === 'You win!' ? 'win' : ''} ${result.message === 'You lose!' ? 'lose' : ''}`}>{result.message}</p>
      <p>{result.description}</p>
    </div>
  );
};

export default ResultInfo;
