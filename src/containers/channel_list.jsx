import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedChannel, fetchMessages } from '../actions/index';

class List extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }


  handleClick = () => {
    // debugger;
    // this.props.setSelectedChannel(channel);
  }


  render() {
    return (
      <div className="channels-container">
        <span> Redux Chat</span>
        <ul>
          { this.props.channels.map((channel) => {
            return (
              <li
                className={this.props.selectedChannel === channel ? 'active' : null}
                onClick={this.handleClick()}
              >
              #{channel}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
