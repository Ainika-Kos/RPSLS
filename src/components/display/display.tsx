import React from 'react';
import './display.scss';

type DisplayProps = {
  playerName: string;
  computerName: string;
  playerScore: number;
  computerScore: number;
};

const Display = ({ playerName, computerName, playerScore, computerScore }: DisplayProps) => {
  return (
    <div className="display">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-6">
            <p className="display__text">{playerName.length ? playerName : 'Player'}</p>
            <p className="display__score">{playerScore}</p>
          </div>
          <div className="col-xs-6">
            <p className="display__text">{computerName}</p>
            <p className="display__score">{computerScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
