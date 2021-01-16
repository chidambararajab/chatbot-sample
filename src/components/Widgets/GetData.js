import React from "react";

import axios from "axios";

export default class GetData extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    const url =
      "https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment";

    axios.get(url).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>{person.keys}</li>
        ))}
      </ul>
    );
  }
}
