export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    // case 'CREATE_MESSAGE': {
    //   const copiedState = state.slice(0);
    //   copiedState.push(action.payload);
    //   return copiedState;
    // }
    // case 'SELECTED_CHANNEL': {
    //   return []; // Channel has changed. Clearing view.
    // }
    default:
      return state;
  }
}
