import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@citric/core'

import App from './App'

ReactDOM.render(
  <>
    <GlobalStyle />

    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
)

