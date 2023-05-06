class Api {
  urls = {
    debts:
      'https://my-json-server.typicode.com/xhevatibraimi/stackblitz-project1/debts',
  };

  constructor() {}

  async getJson(url) {
    return (await window.fetch(url)).json();
  }

  getDebts() {
    return this.getJson(urls['debts']);
  }
}

export { Api };
