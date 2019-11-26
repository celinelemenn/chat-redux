import React from 'react';

const Message = (props) => {
  // const date = new Date(props.conversation.created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i>
        <span>{props.username}</span>
        <small>{}</small>
      </i>
      <p>{props.description}</p>
    </div>
  );
};

export default Message;
