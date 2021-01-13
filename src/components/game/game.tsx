import React, { useState } from 'react';
import Display from '../display/display';
import NameInput from '../nameInput/nameInput';
import './game.scss';

const Board = () => {

  const computerName = 'Computer';
  const [playerName, setPlayerName] = useState('Player');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  

  return (
    <div>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1 className="board-heading">Rock | Paper | Scissors | Lizard | Spock</h1>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-4">
            <Display
              playerScore={playerScore}
              computerScore={computerScore}
              playerName={playerName}
              computerName={computerName}
            />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-8">
            <NameInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
