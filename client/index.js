import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/app.scss';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList';
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);