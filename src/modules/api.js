class Api {
  constructor(gameName) {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.endPoint = 'games/';
    this.game = `${gameName}/`;
    this.scores = [];
  }

  addNewScore = async (score) => {
    const fetchUrl = `${this.url}${this.endPoint}:${this.game}scores/`;
    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    });
    const data = await response.json();
    const { result } = data;
    return result === 'Leaderboard score created correctly.';
  };

  retrieveScores = async () => {
    const fetchUrl = `${this.url}${this.endPoint}:${this.game}scores/`;

    const response = await fetch(fetchUrl);
    const data = await response.json();
    const { result } = data;
    this.scores = result;
    return this.scores;
  };
}

export { Api as default };