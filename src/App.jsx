import { useState } from 'react'
import Header from './components/Header'
import BackgroundImage from './components/Background-img'
import Hospedagem from './pages/hospedagem/Hospedagem'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header />
      <BackgroundImage />
      <Hospedagem />
      <Footer />
    </>
  )
}

export default App 

