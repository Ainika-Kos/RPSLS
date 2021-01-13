import React from 'react';
import './board.scss';

const Board = () => {
  return (
    <div>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1 className="board-heading">Rock | Paper | Scissors | Lizard | Spock</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
