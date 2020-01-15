
import './styles.css';
import { getRandomInt } from './math';

// 1. Find the valuable things.

const secretNumber = getRandomInt(1, 9);
const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currentSquare = 1;
squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;
    const isWinner = that.dataset.secret === 'true';
    if (isWinner) {
        that.classList.add('winner');
    } else {
        that.classList.add('loser');
        that.removeEventListener('click', handleClick);
    }
}

// Once you win, all the other guesses should be marked as losers.
// Maybe make a play again button that resets everything.
// If you win, display a message telling them how awesome they are.
// If they lose (You picked every one but the winner) they should be told they lose.

