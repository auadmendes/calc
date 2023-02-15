import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from './App-styles'
import { Calculator } from './pages/Calculator'
import { GlobalStyle } from './styles/global'
import dark from './styles/theme/dark'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={dark}>
      <Container>
        <Calculator />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
