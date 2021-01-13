export const getMessage = (player: string): string => {
  let message = '';
  switch (player) {
    case 'firstPlayer':
      message = 'You win!';
      break;

    case 'secondPlayer':
      message = 'You lose!';
      break;

    case 'tie':
      message = 'Its a tie!';
  }
  return message;
};
