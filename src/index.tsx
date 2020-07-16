import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
