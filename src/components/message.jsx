import React from 'react';

const Message = (props) => {
  // debugger;
  return (
    <div className="message-container">
      <i><span>{props.conversation.username}</span></i>
      <p>{props.conversation.description}</p>
    </div>
  );
};

export default Message;
