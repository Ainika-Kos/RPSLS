import React from 'react';
import './playerCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlayerType } from '../../data/types';

type PlayerCardProps = {
  player: PlayerType;
};

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="playerCard">
      <p className="playerCard__text">
        {player.name.length ? player.name : 'Player'} : {player.score}
      </p>
      <div className="playCard__icon-wrapper">
        <FontAwesomeIcon icon={player.choise.icon} size="4x" className="playCard__icon" />
      </div>
      <p className="playerCard__text">
        {player.choise.name !== 'Question' ? player.choise.name : '?'}
      </p>
    </div>
  );
};

export default PlayerCard;
