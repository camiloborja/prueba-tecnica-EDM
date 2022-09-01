import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <img src="header.png" alt="" className='header__img' />
        <div className="header__bar">
          <div className="header__bar__logo">
            <img src="logo.png" alt="" />
          </div>
          <nav className="header__bar__icons">
            <a className='header__btn' href='#pufi_rain'>PUFI RAIN</a>
            <hr />
            <a className='header__btn' href='#pufi_puff'>PUFI PUFF</a>
            <hr />
            <a className='header__btn' href='#pufi_cart'>PUFI CART</a>
            <hr />
            <a className='header__btn' href='#pufi_nap'>PUFI NAP</a>
            <hr />
          </nav>
          <div className="header__bar__acount">
            <button className='acount__btn'> MI CUENTA</button>
            <hr />
            <button className='acount__btn'>MI COMPRA</button>
          </div>
        </div>
        <div className="header__text">
          <p>ESTAR COMODO, <br />NUNCA FUE TAN FACIL</p>
        </div>
        <button className='shop__btn'>SHOP</button>
    </div>
  )
}

export default Header