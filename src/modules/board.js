import Api from './api.js';
import Scores from './scores.js';
import Addscore from './addscore.js';

class Board {
  constructor() {
    this.div = document.getElementById('leaderboard');
    this.api = new Api('leaderBoardGameInfinity');
    this.Scores = new Scores();
    this.AddScore = new Addscore();
  }

  renderBoard = async () => {
    this.div.innerHTML = `<div>
                            <section id="scores"></section>
                            <section id="addscore"></section>
                          </div>`;
    this.Scores.renderScores();
    this.AddScore.renderAddScore();
    this.Scores.renderScoreList(await this.api.retrieveScores());
  }
}

export { Board as default };