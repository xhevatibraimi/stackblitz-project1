import { Api } from '../services/api';

class App {
  constructor() {
    this.array = [];
    this.api = new Api();
  }

  async init() {
    this.array = await this.api.getData();
  }

  render() {
    return `<h1>Hello World!</h1>`;
  }
}

export { App };
