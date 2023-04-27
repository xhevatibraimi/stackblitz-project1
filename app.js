import { Service } from './service';

class App {
  constructor() {
    this.array = [];
    this.service = new Service();
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
    return `<h1>JS Starter</h1>`;
  }
}

export { App };
