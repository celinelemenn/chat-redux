// TODO: add and export your own actions

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

export function createMessage(channel, author, content) {
  const body = { author, content };
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  }
}

