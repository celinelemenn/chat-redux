import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// internal components
import { createMessage, fetchMessages } from './../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const channel = this.props.selectedChannel;
    const author = this.props.currentUser;
    const content = this.state.value;
    this.props.createMessage(channel, author, content);
    this.props.fetchMessages(channel);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      value: ""
    });
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
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

function mapStateToProp(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({ createMessage, fetchMessages }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(MessageForm);
