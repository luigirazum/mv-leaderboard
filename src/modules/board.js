class Board {
  constructor() {
    this.title = 'Leaderboard';
  }

  renderBoard = () => {
    const board = document.getElementById('leaderboard');

    board.innerHTML = `<h1>${this.title}</h1>`;
  }
}

export { Board as default };