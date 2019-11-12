import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import { fetchMessages } from '../actions/index';

const Messages = (props) => {
  const newMessages = props.fetchMessages(props.selectedChannel);
  console.log(newMessages);
  console.log(props.messages);

  return (
    <div className="channel-container">
      <div className="channel-title ">
        <span>{ props.selectedChannel}</span>
      </div>
      <div className="channel-content">
        { props.messages.map((message) => {
          return (
            <Message conversation={message} />
          );
        })}
      </div>
    </div>
  );
};

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
