// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// State and reducers
const reducers = combineReducers({
  listChannel: channelsReducer,
  selectedChannel: selectedChannelReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
