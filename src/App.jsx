import { useState } from 'react'
import Header from './components/Header'
import Hospedagem from './pages/hospedagem/Hospedagem'
import BackgroundImage from './components/Background-img'

function App() {

  return (
    <>
      <Header />
      <BackgroundImage />
      <Hospedagem />
    </>
  )
}

export default App 

