import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__img'>
        <img src="logo.png" alt="" />
      </div>
      <hr />
      <nav className='footer__nav'>
        <a className='footer__btn' href='#pufi_rain'>PUFI RAIN</a>
        <a className='footer__btn' href='#pufi_puff'>PUFI PUFF</a>
        <a className='footer__btn' href='#pufi_cart'>PUFI CART</a>
        <a className='footer__btn' href='#pufi_nap'>PUFI NAP</a>
      </nav>
      <hr />
      <nav className='footer__nav'>
        <a className='footer__btn' href='#pufi_rain'>CONTACTO</a>
        <a className='footer__btn' href='#pufi_puff'>AYUDA</a>
        <a className='footer__btn' href='#pufi_cart'>CÓMO COMPRAR</a>
        <a className='footer__btn' href='#pufi_nap'>TERMINOS {'&'} CONDICIONES</a>
      </nav>
      <hr />
      <div>
      </div>
      <hr />
      <div className='footer__social'>
        <span>SIGUENOS EN</span>
        <a href="#"><i className='bx bxl-linkedin-square' ></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-facebook'></i></a>
      </div>


    </div>
  )
}

export default Footer