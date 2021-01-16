import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Javascript from "./components/Widgets/Javascript";
import Todos from "./components/Widgets/Todos";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello world`, { widget: `javascript` }),
    //
  ],
  botName: "LearningBot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  // Defines an object of custom styles if you want to override styles
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  state: {
    learnings: [],
    todos: [],
  },
  widgets: [
    // {
    //   widgetName: "javascript",
    //   widgetFunc: (props) => <Javascript {...props} />,
    //   mapStateToProps: ["learnings"],
    // },
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"],
    },
  ],
};

export default config;
