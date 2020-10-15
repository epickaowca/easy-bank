import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import * as theme from './styleConfig'
import Header from './View/Header' 
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
