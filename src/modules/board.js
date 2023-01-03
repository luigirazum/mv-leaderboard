import Api from './api.js';

class Board {
  constructor() {
    this.title = 'Leaderboard';
    this.api = new Api();
  }

  renderBoard = () => {
    const board = document.getElementById('leaderboard');

    board.innerHTML = `<h1>${this.title}</h1><div id="scores"></div><div id="addscore"></div>`;
  }
}

export { Board as default };