import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}className="channel-editor">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="enter your messsage here ..."
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default MessageForm;
