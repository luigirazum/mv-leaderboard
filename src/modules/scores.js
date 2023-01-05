class Scores {
  constructor() {
    this.title = 'Recent scores';
  }

  renderScoreList = async (scores) => {
    const list = this.div.querySelector('#list');
    const scoreTemplate = (user, score) => `<li><span>${user}</span><span>${score}</span></li>`;

    list.innerHTML = '';
    scores.forEach((score) => {
      list.innerHTML += scoreTemplate(score.user, score.score);
    });
  }

  renderScores = () => {
    this.div = document.getElementById('scores');
    this.div.innerHTML = '';
    this.div.innerHTML = `<div><h2>${this.title}</h2><button type="button" id="refresh">Refresh</button></div>
                          <ul id="list"></ul>`;
  }
}

export { Scores as default };