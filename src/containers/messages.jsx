import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import { fetchMessages } from '../actions/index';

class Messages extends Component {
  // const newMessages = props.fetchMessages(props.selectedChannel);
  // console.log(newMessages);
  // console.log(props.messages);
// debugger

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel)
  }

  render() {
    if (this.props.messages.lenght === 0) {
      return (
        <div />
      );
    }

    return (
      <div className="channel-container">
        <div className="channel-title ">
          <span>{ this.props.selectedChannel}</span>
        </div>
        <div className="channel-content">
          { this.props.messages.map((message) => {
            return (
              <Message conversation={message} />
            );
          })}
        </div>
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
