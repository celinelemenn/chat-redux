// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import channelsList from '../data/channels';


// import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

const identityReducer = (state = null) => state;


// State and reducers
const reducers = combineReducers({
  channels: identityReducer,
  selectedChannel: selectedChannelReducer
});

const initialState = {
  // messages: [],
  channels: channelsList,
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  // currentUser: 'CELINE',
  selectedChannel: 'general'
};

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
