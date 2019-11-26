import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from '../components/message_form';
import { fetchMessages } from '../actions/index';

class Messages extends Component {
  componentWillMount() {
    // this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    // debugger
    this.props.fetchMessages(this.props.selectedChannel);
    // this.intervalID = setInterval(this.props.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    // debugger
    return (
      <div className="channel-container">
        <div className="channel-title ">
          <span> Welcome to channel #{ this.props.selectedChannel}</span>
        </div>
        <div className="channel-content">
          { this.props.messages.map((message) => {
            return <Message conversation={message} key={message.id} />;
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
