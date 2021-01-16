import React from "react";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import config from "./config";
import ActionProvider from "./ActionProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;
