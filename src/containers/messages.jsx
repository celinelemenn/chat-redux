import React from 'react';
import channelsList from './../../data/channels';

const channel = channelsList[0];

const Messages = () => {
  return (
    <div className="channel-container">
      <div className="channel-title ">
        <span>{ channel.name}</span>
      </div>
      <div className="channel-content">
        { channel.conversations.map((conversation) => {
          return (
            <div className="message-container">
              <i><span>{conversation.username}</span></i>
              <p>{conversation.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
