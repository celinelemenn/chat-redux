import channelsList from '../../data/channels';


export default function(state = null, action) {
  switch (action.type) {
    default:
      return channelsList;
  }
}
