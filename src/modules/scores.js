class Scores {
  constructor() {
    this.title = 'Recent scores';
  }

  renderList = (scores) => {
    const list = this.div.querySelector('#list');
    const scoreTemplate = (name, score) => `<li><span>${name}</span><span>${score}</span></li>`;

    list.innerHTML = '';
    scores.forEach((score) => {
      list.innerHTML += scoreTemplate(score.name, score.score);
    });
  }

  renderScores = (scores) => {
    this.div = document.getElementById('scores');
    this.div.innerHTML = '';
    this.div.innerHTML = `<div><h2>${this.title}</h2><button type="button" id="refresh">Refresh</button></div><ul id="list"></ul>`;
    this.renderList(scores);
  }
}

export { Scores as default };