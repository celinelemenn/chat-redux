import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from '../components/MessageForm';
import { fetchMessages } from '../actions/index';

class Messages extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  //   componentDidMount() {
  //   this.refresher = setInterval(this.fetchMessages, 5000);
  // }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title ">
          <span> Welcome to channel #{ this.props.selectedChannel}</span>
        </div>
        <div className="channel-content">
          { this.props.messages.map((message) => {
            return <Message conversation={message} />;
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
