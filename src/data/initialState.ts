import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { PlayerType, ResultType } from './types';

export const initialPlayers: PlayerType[] = [
  {
    name: '',
    score: 0,
    choise: {
      id: 10,
      name: '',
      icon: faQuestion,
    },
  },
  {
    name: 'Computer',
    score: 0,
    choise: {
      id: 10,
      name: '',
      icon: faQuestion,
    },
  },
];

export const initialResult: ResultType = {
  message: '',
  description: 'Just play, Have fun, Enjoy the game!',
};
