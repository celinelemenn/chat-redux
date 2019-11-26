export default function(state = [], action) {
  // debugger
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload;
    default:
      return state;
  }
}
