import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Moralis from 'moralis';

/* Moralis init code */
const serverUrl = "https://ugyw15rapjun.usemoralis.com:2053/server";
const appId = "OyQPu3BBaKGUo128i3JvcugT3k7pI5ZQ6IJAwhw5";
Moralis.start({ serverUrl, appId });

/* React init */
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
