import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from './store'
import { theme } from './styled/theme'
import GlobalStyle from './styled/globalStyles'


import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme = {theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById('app')
  )
})
