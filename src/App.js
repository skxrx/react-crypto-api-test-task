import React from 'react'
import Container from '@material-ui/core/Container'
import { InitialComponent } from './components/index'

function App() {
  return (
    <Container fixed maxWidth='md'>
      <div className='App'>
        <InitialComponent />
      </div>
    </Container>
  )
}

export default App
