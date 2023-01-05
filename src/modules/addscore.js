class Addscore {
  constructor() {
    this.title = 'Add your score';
  }

  renderAddScore = () => {
    this.div = document.getElementById('addscore');
    this.div.innerHTML = '';
    this.div.innerHTML += `<h2>${this.title}</h2>`;
    this.div.innerHTML += `<form id="newscore">
                            <input id="user" type="text" name="user" placeholder="Your name">
                            <input id="score" type="text" name="score" placeholder="Your score">
                            <button type="submit">Submit</button>
                          </form>`;
  }

  getNewScore = (elements) => {
    const [user, score] = elements;
    return { user: user.value, score: score.value };
  }
}

export { Addscore as default };