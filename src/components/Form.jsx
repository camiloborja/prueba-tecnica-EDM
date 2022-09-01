import React from 'react'
import { useState } from 'react'


const Form = () => {
  const [input, setInput] = useState('')
  const [pair, setPair] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setInput(e.target.email.value)
    if (input.length % 2 == 0) {
      setPair('Numero par')
    } else {
      setPair('Numero Impar')
    }
  }

  return (
    <div className='form'>
      <div className="form__text">
        <span>NEWSLETTER</span>
        <h2>SUSCRIBETE</h2>
        <span>Y enterate de todas las novedades</span>
      </div>
      <form className='input__email' onSubmit={handleSubmit} >
        <input name='email' type="email" placeholder='Ingresa tu email' />
        <button><i className='bx bx-right-arrow-alt'></i></button>
        <span className='pair'>{pair}</span>
      </form>
    </div>
  )
}

export default Form