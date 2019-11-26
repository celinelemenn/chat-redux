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
    payload: promise.messages
  };
}


  // const url = `https://wagon-chat.herokuapp.com/general/messages`;
  // fetch(url)
  // .then(response => response.json())
  // .then((data) => {
  //   console.log(data)
  // })


// fetchMessages('general')
