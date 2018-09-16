import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import reducers from './reducers'
import rootSaga from './sagas'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()

const store = createStore(
  combineReducers({ router: routerReducer, ...reducers }),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
document.getElementById('root'))
registerServiceWorker()
