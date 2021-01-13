import React, { useState } from 'react';
import { faQuestion, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
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
import GameOver from '../gameOver/gameOver';

const initialPlayers: PlayerType[] = [
  {
    name: '',
    score: 0,
    choise: {
      id: 10,
      name: 'start',
      icon: faQuestion,
    },
  },
  {
    name: 'Computer',
    score: 0,
    choise: {
      id: 10,
      name: 'start',
      icon: faQuestion,
    },
  },
];

const initialResult: ResultType = {
  message: 'Enjoy the game!',
  description: '',
};

const Game = () => {
  const [realPlayer, setRealPlayer] = useState(initialPlayers[0]);
  const [computerPlayer, setComputerPlayer] = useState(initialPlayers[1]);
  const [result, setResult] = useState(initialResult);
  const [start, setStart] = useState(true);
  const [gameOver, setGameover] = useState(false);
  const [totalWinner, setTotalWinner] = useState('');

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
    setStart(false);

    if (realPlayer.score >= 5 || computerPlayer.score >= 5) {
      realPlayer.score > computerPlayer.score
        ? setTotalWinner(realPlayer.name)
        : setTotalWinner(computerPlayer.name);
      setGameover(true);
    }
  };

  const restartClickHandler = () => {
    setRealPlayer(initialPlayers[0]);
    setComputerPlayer(initialPlayers[1]);
    setResult(initialResult);
    setTotalWinner('');
    setStart(true);
    setGameover(false);
  };

  if (gameOver) {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <GameOver name={totalWinner} />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <p>Press buttton for restart!</p>
            <Button icon={faArrowCircleUp} clickHandler={restartClickHandler} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1 className="game__heading">Rock | Paper | Scissors | Lizard | Spock</h1>
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
        <div className="row middle-xs">
          <div className="col-xs-4">
            <PlayerCard player={realPlayer} start={start} />
          </div>
          <div className="col-xs-4">
            <ResultInfo result={result} />
          </div>
          <div className="col-xs-4">
            <PlayerCard player={computerPlayer} start={start} />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <p className="game__text">Choose your weapon</p>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            {handChoise.map(({ id, icon }) => {
              return <Button key={id} clickHandler={() => choiseHandler(id)} icon={icon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
