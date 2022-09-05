import React from 'react'

const Cards = () => {
  return (
    <div className='cards'>
      <div className="card shop card1">
        <button className='shop__btn__card'>SHOP</button>
        <img src="/umbrella.png" alt="Imagen no disponible" />
      </div>
      <div className="card info card2" id='pufi_rain'>
        <div className='card__img__box'>
          <img src="umbrellaLogo.png" alt="" />
        </div>
        <hr />
        <h2>Pufi RAIN</h2>
        <p>Descripción del producto. Este texto es un texto simulado</p>
        <button className='info__btn'> &#62; ver mas</button>
      </div>
      <div className="card info card3" id='pufi_puff'>
        <div className='card__img__box'>
          <img src="puff verde.png" alt="" />
        </div>
        <hr />
        <h2>Pufi PUFF</h2>
        <p>Descripción del producto. Este texto es un texto simulado</p>
        <button className='info__btn'> &#62; ver mas</button>
      </div>
      <div className="card shop card4">
        <button className='shop__btn__card'>SHOP</button>
        <img src="/puff.webp" alt="Imagen no disponible" />
      </div>
      <div className="card shop card5">
        <button className='shop__btn__card'>SHOP</button>
        <img src="/bags.png" alt="Imagen no disponible" />
      </div>
      <div className="card info card6" id='pufi_cart'>
        <div className='card__img__box'>
          <img src="imagen0.png" alt="" />
        </div>
        <hr />
        <h2>Pufi CART</h2>
        <p>Descripción del producto. Este texto es un texto simulado</p>
        <button className='info__btn'> &#62; ver mas</button>
      </div>
      <div className="card info card7" id='pufi_nap'>
        <div className='card__img__box'>
          <img src="pillowLogo.webp" alt="" />
        </div>
        <hr />
        <h2>Pufi NAP</h2>
        <p>Descripción del producto. Este texto es un texto simulado</p>
        <button className='info__btn'> &#62; ver mas</button>
      </div>
      <div className="card shop card8">
        <button className='shop__btn__card'>SHOP</button>
        <img src="/nap.png" alt="Imagen no disponible" />
      </div>
    </div>
  )
}

export default Cards