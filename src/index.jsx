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


// import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import messagesReducer from './reducers/messages_reducer';

// const identityReducer = (state = null) => state;


// State and reducers

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer
});

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  // currentUser: 'CELINE',
  selectedChannel: 'general'
};

// initialState.messages = [
//   {
//     author: "anonymous92",
//     content: "Hello world!",
//     created_at: "2017-09-26T23:03:16.365Z"
//   },
//   {
//     author: "anonymous77",
//     content: "My name is anonymous77",
//     created_at: "2017-09-26T23:03:21.194Z"
//   }
// ];

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
