import Api from './api.js';
import Scores from './scores.js';

class Board {
  constructor() {
    this.div = document.getElementById('leaderboard');
    this.title = 'Leaderboard';
    this.api = new Api();
    this.Scores = new Scores();
  }

  renderBoard = () => {
    this.div.innerHTML = '';
    this.div.innerHTML = `<h1>${this.title}</h1><div id="scores"></div><div id="addscore"></div>`;
    this.Scores.renderScores(this.api.getScores());
  }
}

export { Board as default };