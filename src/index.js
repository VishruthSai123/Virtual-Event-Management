import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' in React 18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';

// Create the root element for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with the Provider and ErrorBoundary
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
