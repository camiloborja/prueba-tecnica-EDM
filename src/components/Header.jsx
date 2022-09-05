import React, { useState } from 'react'


const Header = () => {
  const [menu, setMenu] = useState('ocult')
  const deplyMenu = () => {
    if (menu === 'ocult') {
      setMenu('active')
    } else (
      setMenu('ocult')
    )
  }

  return (
    <div className='header'>
      <img src="header.png" alt="" className='header__img' />
      <div className='responsive__header'>
        <button onClick={deplyMenu} className='btn__menu'><i class='bx bx-menu'></i></button>
        <nav className={`header__bar__icons ${menu}`}>
          <a className='header__btn' href='#pufi_rain'>PUFI RAIN</a>
          <hr />
          <a className='header__btn' href='#pufi_puff'>PUFI PUFF</a>
          <hr />
          <a className='header__btn' href='#pufi_cart'>PUFI CART</a>
          <hr />
          <a className='header__btn' href='#pufi_nap'>PUFI NAP</a>
          <hr />
          <div className="header__bar__acount">
            <button className='acount__btn'> MI CUENTA</button>
            <hr />
            <button className='acount__btn'>MI COMPRA</button>
          </div>
        </nav>
      </div>
      <div className="header__bar">
        <div className="header__bar__logo">
          <img src="logo.png" alt="" />
        </div>
        <nav className="header__bar__icons">
          <a className='header__btn' href='#pufi_rain'><i className='bx bx-cloud-light-rain'></i><span>PUFI RAIN</span></a>
          <hr />
          <a className='header__btn' href='#pufi_puff'><i className='bx bx-bed'></i><span>PUFI PUFF</span></a>
          <hr />
          <a className='header__btn' href='#pufi_cart'><i className='bx bx-shopping-bag'></i><span>PUFI CART</span></a>
          <hr />
          <a className='header__btn' href='#pufi_nap'><i class='bx bx-briefcase-alt-2'></i><span>PUFI NAP</span></a>
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