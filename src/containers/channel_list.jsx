import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedChannel } from '../actions/index';

class List extends Component {
  handleClick = (e) => {
    // debugger;
    const channel = e.target.innerText;
    this.props.setSelectedChannel(channel);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="channels-container">
        <span> Redux Chat</span>
        <ul>
          { this.props.channels.channelsList.map((channel) => {
            if (this.props.selectedChannel === channel) {
              return (<li className="active" ><a onClick={this.handleClick}> {channel}</a></li>);
            }
            return (<li> <a onClick={this.handleClick}> {channel}</a></li>);
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
