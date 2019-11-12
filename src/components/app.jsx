import React from 'react';

import List from './../containers/channel_list';
import Messages from './../containers/messages';

const App = () => {
  return (
    <div className="messaging-wrapper ">
      <div className="logo-container">
        <img className="messaging-logo" src="./../../assets/images/logo.svg" alt="" />
      </div>
      <List />
      <Messages />
    </div>
  );
};


export default App;
