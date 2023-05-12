import { HtmlComponent } from '../core/html-component';

class Table extends HtmlComponent {
  constructor(api) {
    super();
    this.api = api;
    this.debts = [];
    this.headers = [{ text: 'Name' }, { text: 'Amount' }];
  }

  async initAsync() {
    this.debts = await this.api.getDebts();
  }

  async tableHeader() {
    let headersHtml = '';
    for (const debt of this.debts) {
      headersHtml += `<th>${debt.amount}(${debt.name})</th>`;
    }
    return `<thead><tr>${headersHtml}</tr></thead>`;
  }

  async tableBody() {
    let rowsHtml = '';
    for (const debt of this.debts) {
      rowsHtml += `<tr><td>${debt.name}</td><td>(${debt.amount})</td></tr>`;
    }
    return `<tbody>${rowsHtml}</tbody>`;
  }

  async templateAsync() {
    const thead = await this.tableHeader();
    const tbody = await this.tableBody();
    return `<div class="table-responsive table-points"><table>${thead}${tbody}</table></div>`;
  }
}

export { Table };
