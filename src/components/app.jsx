import React from 'react';

import List from './../containers/channel_list';
import Messages from './../containers/messages';

const App = () => {
  return (
    <div className="app">
      <List />
      <Messages />
    </div>
  );
};

export default App;
