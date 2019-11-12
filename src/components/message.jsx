import React from 'react';

const Message = (props) => {
  const date = new Date(props.conversation.created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i>
        <span>{props.conversation.author}</span>
        <small>{date}</small>
      </i>
      <p>{props.conversation.content}</p>
    </div>
  );
};

export default Message;
