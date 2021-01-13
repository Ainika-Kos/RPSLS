import React from 'react';
import './resultInfo.scss';
import { ResultType } from '../../data/types';


type ResultInfoProps = {
  result: ResultType;
};

const ResultInfo = ({ result }: ResultInfoProps) => {
  return (
    <div className="resultInfo">
      <p>{result.message}</p>
      <p>{result.description}</p>
    </div>
  );
};

export default ResultInfo;
