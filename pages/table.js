import { HtmlComponent } from '../core/html-component';

class Table extends HtmlComponent {
  constructor(datasource) {
    super();
    this.datasource = datasource;
    this.datasource = [];
    this.headers = [{ text: 'Name', key: 'name' }, { text: 'Amount' }];
  }

  async initAsync() {}

  async tableHeader() {
    let headersHtml = '';
    for (const debt of this.datasource) {
      headersHtml += `<th>${debt.amount}(${debt.name})</th>`;
    }
    return `<thead><tr>${headersHtml}</tr></thead>`;
  }

  async tableBody() {
    let rowsHtml = '';
    for (const debt of this.datasource) {
      rowsHtml += `<tr><td>${debt[this.headers[0].key]}</td><td>(${
        debt.amount
      })</td></tr>`;
    }
    return `<tbody>${rowsHtml}</tbody>`;
  }

  async templateAsync() {
    const thead = await this.tableHeader();
    const tbody = await this.tableBody();
    return `<table>${thead}${tbody}</table>`;
  }
}

export { Table };
