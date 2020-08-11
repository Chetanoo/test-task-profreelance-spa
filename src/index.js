import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app/App'
import Notificator from './containers/Notificator/Notificator'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Notificator>
          <App />
        </Notificator>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
