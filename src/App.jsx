import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Cards from './components/Cards'
import Instagram from './components/Instagram'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Instagram />
      <Form />
      <Footer />
      <footer className='copyright'>
        <p className='footer__text'>PUFI Copyright 2017 - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}

export default App
