import { Api } from '../services/api';

class App {
  constructor() {
    this.array = [];
    this.service = new Api();
  }

  init() {
    this.array = [
      {
        name: 'name 1',
        amount: 100,
      },
      {
        name: 'name 1',
        amount: 100,
      },
      {
        name: 'name 1',
        amount: 100,
      },
      {
        name: 'name 1',
        amount: 100,
      },
      {
        name: 'name 1',
        amount: 100,
      },
      {
        name: 'name 1',
        amount: 100,
      },
      {
        name: 'name 1',
        amount: 100,
      },
      {
        name: 'name 1',
        amount: 100,
      },
    ];
  }

  render() {
    return `<h1>Hello World!</h1>`;
  }
}

export { App };
