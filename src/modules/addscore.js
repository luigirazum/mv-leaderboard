class Addscore {
  constructor() {
    this.title = 'Add your score';
  }

  renderAddScore = () => {
    this.div = document.getElementById('addscore');
    this.div.innerHTML = '';
    this.div.innerHTML += `<h2>${this.title}</h2>`;
    this.div.innerHTML += `<form id="newscore">
                            <input id="user" type="text" name="user" placeholder="Your name" pattern="((\\w|\\d)+\\s?)*(\\w|\\d)+" minlength="5" required>
                            <input id="score" type="number" name="score" placeholder="Your score" min="1" max="100000" required>
                            <button type="submit">Submit</button>
                          </form>`;
  }

  getNewScore = (elements) => {
    const [user, score] = elements;
    return { user: user.value, score: score.value };
  }
}

export { Addscore as default };