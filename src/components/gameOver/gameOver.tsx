import React from 'react';
import looserImage from '../../assets/images/looserImage.jpg';
import winnerImage from '../../assets/images/winnerImage.jpg';
import './gameOver.scss';

type GameOverProps = {
  name: string;
};

const GameOver = ({ name }: GameOverProps) => {
  return (
    <div className="gameOver">
      {name === 'Computer' ? (
        <div>
          <p>Game Over!</p>
          <div className="gameOver__image-wrapper">
            <img src={looserImage} alt="looser_image" className="gameOver__image" />
          </div>
        </div>
      ) : (
        <div>
          <p>Congratulations!</p>
          <div className="gameOver__image-wrapper">
            <img src={winnerImage} alt="winner_image" className="gameOver__image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOver;
