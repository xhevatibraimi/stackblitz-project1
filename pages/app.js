class App {
  constructor(api) {
    this.api = api;
    this.debts = [];
  }

  async init() {
    this.debts = await this.api.getDebts();
    console.log(this.debts);
  }

  render() {
    let debtsList = '';
    for (const debt in this.debts) {
      debtsList += `<li>${debt.name}</li>`;
    }
    return `<ul>${debtsList}</ul>`;
  }
}

export { App };
