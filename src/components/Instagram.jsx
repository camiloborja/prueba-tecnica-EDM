import React from 'react'

const Instagram = () => {
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let randomImg = [0]
  let i = 0
  while (i < 6) {
    let value = getRandom(0, 5)
    let sum = 0
    for (let j = 0; j < randomImg.length; j++) {
      if (value != randomImg[j]) {
        sum++
      }
    }
    if (sum == randomImg.length) {
      randomImg[i] = value
      i++
    }
  }
  return (
    <div className='instagram'>
      <div className='instagram__tittle'>
        <span>Instagram</span>
        <h2>#ESPUFI</h2>
      </div>
      <div className='instagram__box'>
        <div className='instagram__img__box'>
          <img src={`/imagen${randomImg[0]}.png`} alt="" className='instagram__img' />
        </div>
        <div>
          <img src={`/imagen${randomImg[1]}.png`} alt="" className='instagram__img' />
        </div>
        <div className="instagram__img__box">
          <img src={`/imagen${randomImg[2]}.png`} alt="" className='instagram__img' />
        </div>
        <div className="instagram__img__box">
          <img src={`/imagen${randomImg[3]}.png`} alt="" className='instagram__img' />
        </div>
        <div className="instagram__img__box">
          <img src={`/imagen${randomImg[4]}.png`} alt="" className='instagram__img' />
        </div>
        <div className="instagram__img__box">
          <img src={`/imagen${randomImg[5]}.png`} alt="" className='instagram__img' />
        </div>
      </div>

    </div>
  )
}

export default Instagram