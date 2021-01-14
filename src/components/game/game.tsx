import React, { useState, useEffect } from 'react';
import { faArrowCircleUp, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import NameInput from '../nameInput/nameInput';
import PlayerCard from '../playerCard/playerCard';
import ResultInfo from '../resultInfo/resultInfo';
import Button from '../button/button';
import GameOver from '../gameOver/gameOver';
import { initialPlayers, initialResult } from '../../data/initialState';
import { handChoise } from '../../data/handChoise';
import { smartNumber } from '../../helpers/smartNumber';
import { getWinner } from '../../helpers/getWinner';
import { getMessage } from '../../helpers/getMessage';
import { getDescription } from '../../helpers/getDescription';
import './game.scss';

const Game = () => {
  const [realPlayer, setRealPlayer] = useState(initialPlayers[0]);
  const [computerPlayer, setComputerPlayer] = useState(initialPlayers[1]);
  const [result, setResult] = useState(initialResult);
  const [start, setStart] = useState(true);
  const [gameOver, setGameover] = useState(false);
  const [totalWinner, setTotalWinner] = useState('');
  const [inputName, setInputName] = useState('');

  const maxScore = 10;

  useEffect(() => {
    if (realPlayer.score >= maxScore || computerPlayer.score >= maxScore) {
      realPlayer.score > computerPlayer.score
        ? setTotalWinner(realPlayer.name)
        : setTotalWinner(computerPlayer.name);
      setGameover(true);
    }
  }, [realPlayer, computerPlayer]);

  const newRealPlayer = { ...realPlayer };
  const newComputerPlayer = { ...computerPlayer };
  const newResult = { ...result };

  const nameChangeHandler = (name: string) => {
    setInputName(name);
  };

  const playerNameHandler = () => {
    if (inputName) {
      newRealPlayer.name = inputName;
      setRealPlayer(newRealPlayer);
      setInputName('');
    }
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
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <GameOver
              name={totalWinner}
              playerScore={realPlayer.score}
              computerScore={computerPlayer.score}
            />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <p className="game__text">Press buttton for restart!</p>
            <Button icon={faArrowCircleUp} clickHandler={restartClickHandler} size="normal" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1 className="game__heading">Rock | Paper | Scissors | Lizard | Spock</h1>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <div className="input-wrapper">
              <NameInput
                type="text"
                value={inputName}
                placeholder="Enter your name"
                onChange={nameChangeHandler}
              />
              <Button icon={faPlusCircle} clickHandler={playerNameHandler} size="small" />
            </div>
          </div>
        </div>
        <div className="row middle-xs">
          <div className="col-xs-6 col-md-4 first-md">
            <PlayerCard player={realPlayer} start={start} />
          </div>
          <div className="col-xs-12 col-md-4 last-xs">
            <ResultInfo result={result} />
          </div>
          <div className="col-xs-6 col-md-4 last-md">
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
              return (
                <Button key={id} clickHandler={() => choiseHandler(id)} icon={icon} size="normal" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
