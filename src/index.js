import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {compose} from 'redux';
import persistState from 'redux-localstorage'

import rootReducer from './reducers'

import './Utils.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import trikibelius from './reducers';
const PersistentEnhancer = compose(
  /* [middlewares] */
  persistState(/*paths, config*/)
)

const store = createStore(trikibelius,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
registerServiceWorker();