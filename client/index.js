import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import store from './store'
import App from './components/App'

const theme = extendTheme({
  colors: {
    myColors: {
      primary: 'lightblue',
      secondary: 'blanchedalmond'
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>,
    document.getElementById('app')
  )
})
