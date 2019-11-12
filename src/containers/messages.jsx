import React from 'react';
import channelsList from './../../data/channels';
import Message from '../components/message';

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
            <Message conversation={conversation} />
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
