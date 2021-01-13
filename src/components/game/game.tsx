import React, { useState } from 'react';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import NameInput from '../nameInput/nameInput';
import PlayerCard from '../playerCard/playerCard';
import SetResult from '../setResult/setResult';
import Button from '../button/button';
import { PlayerType } from '../../data/types';
import { handChoise } from '../../data/handChoise';
import { smartNumber } from '../../helpers/smartNumber';
import './game.scss';

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

  const newRealPlayer = { ...realPlayer };
  const newComputerPlayer = { ...computerPlayer };

  const nameChangeHandler = (name: string) => {
    newRealPlayer.name = name;
    setRealPlayer(newRealPlayer);
  };

  const choiseHandler = (identificator: number) => {

    const index = handChoise.findIndex(({ id }) => id === identificator);
    newRealPlayer.choise.icon = handChoise[index].icon;
    newRealPlayer.choise.name = handChoise[index].name;

    const number = smartNumber();
    newComputerPlayer.choise.icon = handChoise[number].icon;
    newComputerPlayer.choise.name = handChoise[number].name;

    setRealPlayer(newRealPlayer);
    setComputerPlayer(newComputerPlayer);
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
            <SetResult text="Set result" />
          </div>
          <div className="col-xs-4">
            <PlayerCard
              player={computerPlayer}
            />
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
              return <Button
                key={id}
                clickHandler={() => choiseHandler(id)}
                icon={icon}
              />;
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
