import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Window from './components/Window'
// import Chater from './components/Chater';

ReactDOM.render(
  <React.StrictMode>
      <Window />
  </React.StrictMode>,
  document.getElementById('root')
);

if (true) {
  ReactDOM.render(
    <React.StrictMode>
      <Chater />
      <Chater />
    </React.StrictMode>,
    document.getElementById('level-menu')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
