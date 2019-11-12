import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {
  return (
    <div className="channels-container">
      <span> Redux Chat</span>
      <ul>
        { props.channels.map((channel) => {
          if (props.selectedChannel === channel.name) {
            return (<li className="active"> {channel.name}</li>);
          }
          return (<li> {channel.name}</li>);
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  // debugger;
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel

  };
}

export default connect(mapStateToProps)(List);
