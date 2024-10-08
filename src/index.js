import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/Components/Redux/Store'; // Import persistor and store
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate

ReactDOM.render(
  <Provider store={store}>
   
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);