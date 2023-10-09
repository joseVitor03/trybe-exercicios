import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Container } from './styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <h1>Titulo</h1>
      </Header>
      <Container>
        <p>conteudo</p>
      </Container>
    </>
  )
}

export default App
