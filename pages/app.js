import { HtmlComponent } from '../core/html-component';

class App extends HtmlComponent {
  constructor(api, table) {
    super();
    this.api = api;
    this.table = table;
  }

  async initAsync() {
    this.debts = 
  }

  async templateAsync() {
    return `<div class="table-responsive table-points">${await this.table.renderAsync()}</div>`;
  }
}

export { App };
