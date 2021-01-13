import {
  faHandRock,
  faHandPeace,
  faHandSpock,
  faHandPaper,
  faHandLizard,
} from '@fortawesome/free-solid-svg-icons';
import { HandChoiseType } from './types';


export const handChoise: HandChoiseType[] = [
  { id: 1, name: 'Rock', icon: faHandRock },
  { id: 2, name: 'Paper', icon: faHandPaper },
  { id: 3, name: 'Scissors', icon: faHandPeace },
  { id: 4, name: 'Lizard', icon: faHandLizard },
  { id: 5, name: 'Spock', icon: faHandSpock },
];
