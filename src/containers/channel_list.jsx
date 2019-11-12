import React from 'react';
import channelsList from './../../data/channels';

const List = () => {
  return (
    <div className="channels-container">
      <span> Redux Chat</span>
      <ul>
        { channelsList.map((channel) => {
          return (<li> {channel.name}</li>);
        })}
      </ul>
    </div>
  );
};

export default List;
