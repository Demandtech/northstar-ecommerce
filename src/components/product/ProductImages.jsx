import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images, bonus, main }) => {
  const [mainImg, setMainImg] = useState(images?.[0])

  return (
    <Wrapper>
      <div className='main-img'>
        <img src={mainImg} alt='Product image' height='100%' width='100%' />
        <div className='percent'>{bonus > 0 && <span>-{bonus}%</span>}</div>
      </div>
      <div className='gallery'>
        {images?.map((thumb, index) => {
          return (
            <div
              className={`${mainImg == thumb ? 'active-pag' : null} pag`}
              onClick={() => setMainImg(images[index])}
              key={index}
            >
              <img src={thumb} alt='product thumbnail' />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default ProductImages

const Wrapper = styled.div`
  .main-img {
    width: 100%;
    height: 250px;
    margin-bottom: 0.5rem;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .percent {
      font-family: 'Arimo', sans-serif;
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-weight: 700;
      font-size: 15px;
      line-height: 17px;
      background: #d6763c;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #ffffff;
    }
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 75px;
    column-gap: 1rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .pag {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .active-pag {
    box-shadow: 0px 0px 0px 2px #024e82;
  }
  @media (min-width: 576px) {
    .main-img {
      height: 300px;
    }
  }
  @media (min-width: 992px) {
    .main-img {
      height: 350px;
    }
    .gallery {
      grid-template-rows: 100px;
    }
  }
`
