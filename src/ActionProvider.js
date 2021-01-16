// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  javascriptHandler = () => {
    const message = this.createChatBotMessage("Here's the topics!");
    this.setChatbotMessage(message); //This helps to write message in chat bot.
  };

  todosHandler = () => {
    const message = this.createChatBotMessage("Here's the topics!", {
      widget: "todos",
    });
    this.setChatbotMessage(message);
  };

  cantfindthis = () => {
    const message = this.createChatBotMessage(
      "Please provide the valid values in message box!"
    );
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message], // already presented message + Message Now.
    }));
  };
}

export default ActionProvider;
