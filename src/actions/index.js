// TODO: add and export your own actions

// import channelsList from '../../data/channels';

export function setSelectedChannel(channelName) {
  return {
    type: 'SELECTED_CHANNEL',
    payload: channelName
  };
}

export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}
