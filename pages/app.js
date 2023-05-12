import { HtmlComponent } from '../core/html-component';
import { Table } from './table';

class App extends HtmlComponent {
  constructor(api) {
    super();
    this.api = api;
    this.debts = [];
    this.table = new Table(this.debts);
  }

  async initAsync() {
    this.debts = await this.api.getDebts();
    this.table.headers = [
      { text: 'Name', key: 'name' },
      { text: 'Amount', key: 'amount' },
    ];
  }

  async templateAsync() {
    this.table.datasource = this.debts;
    return `<div class="table-responsive table-points">${await this.table.renderAsync()}</div>
    <br />
    <div class="table-responsive table-points">${await this.table.renderAsync()}</div>`;
  }
}

export { App };
