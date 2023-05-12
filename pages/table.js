import { HtmlComponent } from '../core/html-component';

class Table extends HtmlComponent {
  constructor(datasource, headers) {
    super();
    this.datasource = datasource;
    this.datasource = [];
    this.headers = headers;
  }

  async initAsync() {}

  async tableHeader() {
    let headersHtml = '';
    for (const header of this.headers) {
      headersHtml += `<th>${header.text}</th>`;
    }
    return `<thead><tr>${headersHtml}</tr></thead>`;
  }

  async tableBody() {
    let rowsHtml = '';
    for (const record of this.datasource) {
      rowsHtml += `<tr>`;
      for (const header of this.headers) {
        rowsHtml += `<td>${record[header.key]}</td>`;
      }
      rowsHtml += `</tr>`;
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
