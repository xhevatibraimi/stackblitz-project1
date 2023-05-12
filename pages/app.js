import { HtmlComponent } from '../core/html-component';

class App extends HtmlComponent {
  constructor(table) {
    super();
    this.table = table;
  }

  async initAsync() {
    this.debts = await this.api.getDebts();
  }

  async templateAsync() {
    return `<div class="table-responsive table-points">${await table.renderAsync()}</div>`;
  }
}

export { App };
