import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images, bonus }) => {
  const [mainImg, setMainImg] = useState(images?.[0])
  return (
    <Wrapper>
      <div className='main-img'>
        <img src={mainImg} alt=''/>
        <div className='percent'>
          <span>-{bonus}%</span>
        </div>
      </div>
      <div className='gallery'>
        {images?.map((thumb, index) => {
          return (
            <div
              className={`${mainImg == thumb ? 'active-pag' : null} pag`}
              onClick={() => setMainImg(images[index])}
              key={index}
            >
              <img src={thumb} alt='' />
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
    height: 500px;
    margin-bottom: 0.5rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
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

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
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
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`
