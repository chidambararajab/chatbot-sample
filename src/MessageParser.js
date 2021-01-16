class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("js")) {
      this.actionProvider.javascriptHandler();
    } else if (lowercase.includes("todo")) {
      this.actionProvider.todosHandler();
    } else {
      this.actionProvider.cantfindthis();
    }
  }
}

export default MessageParser;
