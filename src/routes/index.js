import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import store from 'store'
import intlConfig from 'config/intl'
import Routes from './routes'

export default () => (
  <Provider store={store}>
    <IntlProvider {...intlConfig}>
      <Routes />
    </IntlProvider>
  </Provider>
)
