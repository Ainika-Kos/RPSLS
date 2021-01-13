import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faQuestion,
  faHandRock,
  faHandPeace,
  faHandSpock,
  faHandPaper,
  faHandLizard
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'flexboxgrid';

library.add(
  faQuestion,
  faHandRock,
  faHandPeace,
  faHandSpock,
  faHandPaper,
  faHandLizard);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
