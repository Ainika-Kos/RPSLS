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
      <div>
        {name === 'Computer' ? (
          <div>
            <p>Game Over!</p>
            <div>
              <img src={looserImage} alt="looser_image" />
            </div>
          </div>
        ) : (
          <div>
            <p>Congratulations!</p>
            <div>
              <img src={winnerImage} alt="winner_image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOver;
