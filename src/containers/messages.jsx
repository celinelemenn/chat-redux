import React from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';


const Messages = (props) => {
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

export default connect(mapStateToProps)(Messages);
