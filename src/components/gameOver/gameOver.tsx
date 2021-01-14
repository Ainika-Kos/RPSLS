import React from 'react';
import looserImage from '../../assets/images/looserImage.jpg';
import winnerImage from '../../assets/images/winnerImage.jpg';
import './gameOver.scss';

type GameOverProps = {
  name: string;
  playerScore: number;
  computerScore: number;
};

const GameOver = ({ name, playerScore, computerScore }: GameOverProps) => {
  return (
    <div className="gameOver">
      {name === 'Computer' ? (
        <div>
          <p className="gameOver__text">Game Over! The winner is {name}!</p>
          <div className="gameOver__image-wrapper">
            <img src={looserImage} alt="looser_image" className="gameOver__image" />
          </div>
        </div>
      ) : (
        <div>
          <p className="gameOver__text">Congratulations, {name.length ? name : 'Player'}!</p>
          <div className="gameOver__image-wrapper">
            <img src={winnerImage} alt="winner_image" className="gameOver__image" />
          </div>
        </div>
      )}
      <p className="gameOver__text">
        Your score: {playerScore} | Computer score: {computerScore}
      </p>
    </div>
  );
};

export default GameOver;
