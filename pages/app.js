import { HtmlComponent } from '../core/html-component';

class App extends HtmlComponent {
  constructor(api) {
    super();
    this.api = api;
    this.debts = [];
  }

  async initAsync() {
    this.debts = await this.api.getDebts();
  }

  async templateAsync() {
    let debtsList = '';
    for (const debt of this.debts) {
      debtsList += `<li>${debt.amount}(${debt.name})</li>`;
    }
    return `<ul>${debtsList}</ul>`;
  }
}

export { App };
