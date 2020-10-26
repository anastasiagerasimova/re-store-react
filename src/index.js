import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundry from './components/error-boundry/index'
import {BookstoreServiceProvider} from './components/bookstore-service-context/index'
import BookstoreService from './services/bookstore-services'
import store from './store'
import App from './components/app/index';

const bookstoreService = new BookstoreService()

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
  );
