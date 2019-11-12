// TODO: add and export your own actions

// import channelsList from '../../data/channels';

export function setSelectedChannel(channel) {
  return {
    type: 'SELECTED_CHANNEL',
    payload: channel
  };
}

// export function setChannels() {
//   return {
//     type: 'SET_CHANNELS',
//     payload: channelsList
//   };
// }
