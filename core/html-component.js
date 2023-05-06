class HtmlComponent {
  async initAsync() {
    throw new Error('not implemented');
  }

  async templateAsync() {
    throw new Error('not implemented');
  }

  async renderAsync() {
    await init();
    return await template();
  }
}
