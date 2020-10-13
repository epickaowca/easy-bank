import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as theme from './styleConfig'
import styled from 'styled-components'
import Header from './View/Header'
import Home from './View/Home'
import About from './View/About'
import Articles from './View/Articles'
import Footer from './View/Footer'

const MainWrapper = styled.div`
  margin: auto;
  max-width: 1920px;
  overflow-x: hidden;
`


function App() {
  return (
    <MainWrapper>
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <About />
        <Articles />
        <Footer />
      </ThemeProvider>
    </MainWrapper>
  )
}

export default App;
