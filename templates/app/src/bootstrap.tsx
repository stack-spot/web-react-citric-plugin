import React from 'react'
import ReactDOM from 'react-dom'
import Citric from 'citric'

import { GlobalStyle } from './core/styles/global'
import App from './App'

ReactDOM.render(
  <>
    <GlobalStyle />

    <Citric>
      <App />
    </Citric>

  </>,
  document.getElementById('root')
)

