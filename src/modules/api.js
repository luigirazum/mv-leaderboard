class Api {
  constructor() {
    this.scores = [
      { name: 'Joseph', score: 300 },
      { name: 'Jane', score: 100 },
      { name: 'Christian', score: 30 },
      { name: 'Ronaldo', score: 85 },
      { name: 'Vincent', score: 210 },
      { name: 'Patrick', score: 127 },
    ];
  }

  getScores = () => this.scores;
}

export { Api as default };