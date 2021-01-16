import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const url =
      "https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment";

    const user = {
      name: this.state.name,
    };

    axios.post(url, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
