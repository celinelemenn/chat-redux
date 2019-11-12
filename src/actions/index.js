// TODO: add and export your own actions

// import channelsList from '../../data/channels';

export function setSelectedChannel(channelName) {
  return {
    type: 'SELECTED_CHANNEL',
    payload: channelName
  };
}

// export function setChannels() {
//   return {
//     type: 'SET_CHANNELS',
//     payload: channelsList
//   };
// }
