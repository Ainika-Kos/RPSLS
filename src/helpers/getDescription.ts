export const getDescription = (winner: string, looser: string): string => {
  let message = '';
  if (winner === 'Rock') {
    message = getRockDescription(looser);
  } else if (winner === 'Lizard') {
    message = getLizardDescription(looser);
  } else if (winner === 'Spock') {
    message = getSpockDescription(looser);
  } else if (winner === 'Scissors') {
    message = getScissorsDescription(looser);
  } else {
    message = getPaperDescription(looser);
  }
  return message;
};

const getRockDescription = (looser: string): string => {
  return `Rock crushes ${looser}`;
};

const getLizardDescription = (looser: string): string => {
  return looser === 'Spock' ? 'Lizard poisons Spock' : 'Lizard eats Paper';
};

const getSpockDescription = (looser: string): string => {
  return looser === 'Scissors' ? 'Spock smashes Scissors' : 'Spock vaporizes Rock';
};

const getScissorsDescription = (looser: string): string => {
  return looser === 'Paper' ? 'Scissors cuts Paper' : 'Scissors decapitates Lizard';
};

const getPaperDescription = (looser: string): string => {
  return looser === 'Rock' ? 'Paper covers Rock' : 'Paper disproves Spock';
};
