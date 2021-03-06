import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

Sentry.init({
  dsn: (window as any)._elrep_sentry_dsn, // eslint-disable-line @typescript-eslint/no-explicit-any
  environment: (window as any)._elrep_flask_env, // eslint-disable-line @typescript-eslint/no-explicit-any
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.2,
})

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()