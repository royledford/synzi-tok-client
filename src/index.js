import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/normalize.css'
import './styles/reset.css'
import './styles/vars.css'
import './styles/base.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
