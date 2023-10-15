export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Данный игрок уже включён в команду');
    } else {
      this.members.add(char);
    }
  }

  addAll(...characters) {
    characters.forEach((pers) => {
      this.members.add(pers);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
