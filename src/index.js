// Import css styles for our project
import './styles.css';

import Board from './modules/board.js';

const board = new Board();

const assignEventListeners = () => {
  const btnRefresh = document.querySelector('#scores button');
  const frmAddNewScore = document.forms.newscore;

  btnRefresh.addEventListener('click', async (e) => {
    e.preventDefault();
    board.Scores.renderScoreList(await board.api.retrieveScores());
  });

  frmAddNewScore.addEventListener('submit', async (e) => {
    e.preventDefault();
    const score = board.AddScore.getNewScore(e.target.elements);
    await board.api.addNewScore(score);
    e.target.reset();
    btnRefresh.click();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  board.renderBoard().then(assignEventListeners());
});
