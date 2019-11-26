import React, { Component } from 'react';

class MessageForm extends Component {
  handleSubmit = () => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}className="channel-editor">
        <input type="text" className="form-control" />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default MessageForm;
