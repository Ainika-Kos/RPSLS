import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type HandChoiseType = {
  id: number;
  name: string;
  icon: IconDefinition;
};

export type PlayerType = {
  name: string;
  score: number;
  choise: HandChoiseType;
};

export type ResultType = {
  message: string;
  description: string;
};


