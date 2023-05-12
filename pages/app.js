import { HtmlComponent } from '../core/html-component';

class App extends HtmlComponent {
  constructor(table) {
    super();
    this.table = table;
  }

  async initAsync() {}

  async templateAsync() {
    return `<div class="table-responsive table-points">${await this.table.renderAsync()}</div>`;
  }
}

export { App };
