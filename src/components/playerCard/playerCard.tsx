import React from 'react';
import './playerCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PlayerCardProps = {
  name: string;
};

const PlayerCard = ({ name }: PlayerCardProps) => {
  return (
    <div className="playerCard">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <p className="playerCard__text">{name.length ? name : 'Player'}</p>
                      <div className="playCard__box">
                          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
