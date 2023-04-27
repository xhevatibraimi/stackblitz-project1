class Api {
  constructor() {
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

  getData() {
    return new Promise((resolve, reject) => resolve(this.data));
  }
}

export { Api };
