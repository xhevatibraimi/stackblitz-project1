import { HtmlComponent } from '../core/html-component';

class App extends HtmlComponent {
  constructor(api) {
    super();
    this.api = api;
    this.debts = [];
  }

  async initAsync() {
    this.debts = await this.api.getDebts();
    console.log(this.debts);
  }

  async templateAsync() {
    let debtsList = '';
    for (const debt in this.debts) {
      debtsList += `<li>${debt.name}</li>`;
    }
    return `<ul>${debtsList}</ul>`;
  }
}

export { App };
