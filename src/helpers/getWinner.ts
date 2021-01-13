export const getWinner = (first: string, second: string): string => {
  let result = '';

  if (first === second) {
    result = 'tie';
  } else if (first === 'Rock') {
    if (second === 'Lizard' || second === 'Scissors') {
      result = 'firstPlayer';
    } else {
      result = 'secondPlayer';
    }
  } else if (first === 'Lizard') {
    if (second === 'Spock' || second === 'Paper') {
      result = 'firstPlayer';
    } else {
      result = 'secondPlayer';
    }
  } else if (first === 'Spock') {
    if (second === 'Scissors' || second === 'Rock') {
      result = 'firstPlayer';
    } else {
      result = 'secondPlayer';
    }
  } else if (first === 'Scissors') {
    if (second === 'Paper' || second === 'Lizard') {
      result = 'firstPlayer';
    } else {
      result = 'secondPlayer';
    }
  } else if (first === 'Paper') {
    if (second === 'Spock' || second === 'Rock') {
      result = 'firstPlayer';
    } else {
      result = 'secondPlayer';
    }
  }
  return result;
};
