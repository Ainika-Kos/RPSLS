import React from 'react';
import './playerCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion} from '@fortawesome/free-solid-svg-icons';
import { PlayerType } from '../../data/types';

type PlayerCardProps = {
  player: PlayerType;
  start: boolean;
};

const PlayerCard = ({ player, start }: PlayerCardProps) => {

  const { name, score, } = player;
  const { icon } = player.choise;

  return (
    <div className="playerCard">
      <p className="playerCard__text">
        {name.length ? name : 'Player'} : {score}
      </p>
      <div className="playCard__icon-wrapper">
        {start ? (
          <FontAwesomeIcon icon={faQuestion} size="4x" className="playCard__icon" spin />
        ) : (
          <FontAwesomeIcon icon={icon} size="4x" className="playCard__icon" />
        )}
        
      </div>
      <p className="playerCard__text">
        {player.choise.name}
      </p>
    </div>
  );
};

export default PlayerCard;
