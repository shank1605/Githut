import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RelayEnvironmentProvider
} from 'react-relay/hooks';
import {
  BrowserRouter as Router
} from "react-router-dom";
import RelayEnvironment from './RelayEnvironment';
import Spinner from './Spinner';
const { Suspense } = React;



ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Spinner />}>
        <Router>
          <App />
        </Router>
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
