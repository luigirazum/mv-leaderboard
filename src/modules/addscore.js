class Addscore {
  constructor() {
    this.title = 'Add your score';
  }

  renderAddScore = () => {
    this.div = document.getElementById('addscore');
    this.div.innerHTML = '';
    this.div.innerHTML += `<h2>${this.title}</h2>`;
    this.div.innerHTML += `<form>
                            <input type="text" placeholder="Your name">
                            <input type="text" placeholder="Your score">
                            <button type="submit">Submit</button>
                          </form>`;
  }
}

export { Addscore as default };