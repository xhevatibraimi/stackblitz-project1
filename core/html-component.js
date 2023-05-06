class HtmlComponent {
  async initAsync() {
    throw new Error('not implemented');
  }

  async templateAsync() {
    throw new Error('not implemented');
  }

  async renderAsync() {
    await this.initAsync();
    return await this.templateAsync();
  }
}

export { HtmlComponent };
