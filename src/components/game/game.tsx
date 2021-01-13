import React, { useState } from 'react';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import NameInput from '../nameInput/nameInput';
import PlayerCard from '../playerCard/playerCard';
import ResultInfo from '../resultInfo/resultInfo';
import Button from '../button/button';
import { PlayerType, ResultType } from '../../data/types';
import { handChoise } from '../../data/handChoise';
import { smartNumber } from '../../helpers/smartNumber';
import { getWinner } from '../../helpers/getWinner';
import { getMessage } from '../../helpers/getMessage';
import './game.scss';
import { getDescription } from '../../helpers/getDescription';

const Board = () => {
  const [realPlayer, setRealPlayer] = useState<PlayerType>({
    name: '',
    score: 0,
    choise: {
      id: 0,
      name: 'Start game',
      icon: faQuestion,
    },
  });

  const [computerPlayer, setComputerPlayer] = useState<PlayerType>({
    name: 'Computer',
    score: 0,
    choise: {
      id: 0,
      name: 'Start game',
      icon: faQuestion,
    },
  });

  const [result, setResult] = useState<ResultType>({
    message: 'Enjoy your game!',
    description: '',
  });

  const newRealPlayer = { ...realPlayer };
  const newComputerPlayer = { ...computerPlayer };
  const newResult = { ...result };

  const nameChangeHandler = (name: string) => {
    newRealPlayer.name = name;
    setRealPlayer(newRealPlayer);
  };

  const choiseHandler = (identificator: number) => {

    const index = handChoise.findIndex(({ id }) => id === identificator);
    const playerChoiseIcon = handChoise[index].icon;
    const playerChoiseName = handChoise[index].name;

    const number = smartNumber();
    const computerChoiseIcon = handChoise[number].icon;
    const computerChoiseName = handChoise[number].name;

    const winner = getWinner(playerChoiseName, computerChoiseName);

    let newDescription;
    
    if (winner === 'tie') {
      newDescription = `${playerChoiseName} = ${computerChoiseName}`;
    } else if (winner === 'firstPlayer') {
      newRealPlayer.score += 1;
      newDescription = getDescription(playerChoiseName, computerChoiseName);
    } else {
      newComputerPlayer.score += 1;
      newDescription = getDescription(computerChoiseName, playerChoiseName);
    }

    newResult.message = getMessage(winner);
    newResult.description = newDescription;
       
    newRealPlayer.choise.icon = playerChoiseIcon;
    newRealPlayer.choise.name = playerChoiseName;

    newComputerPlayer.choise.icon = computerChoiseIcon;
    newComputerPlayer.choise.name = computerChoiseName;

    setRealPlayer(newRealPlayer);
    setComputerPlayer(newComputerPlayer);
    setResult(newResult);
  };

  return (
    <div>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1 className="board-heading">Rock | Paper | Scissors | Lizard | Spock</h1>
          </div>
        </div>
        <div className="row middle-xs">
          <div className="col-xs-4">
            <PlayerCard player={realPlayer} />
          </div>
          <div className="col-xs-4">
            <ResultInfo result={result} />
          </div>
          <div className="col-xs-4">
            <PlayerCard player={computerPlayer} />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <p className="game__text">Choose your weapon:</p>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            {handChoise.map(({ id, icon }) => {
              return (
                <Button
                  key={id}
                  clickHandler={() => choiseHandler(id)}
                  icon={icon}
                />);
            })}
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-4">
            <NameInput
              type="search"
              value={realPlayer.name}
              placeholder="Enter your name"
              onChange={nameChangeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
