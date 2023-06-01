import React, { useEffect } from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ProductCard = ({ id, name, img, price, index }) => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Card data-aos='zoom-in'>
      <Link to={`/product/${id}`}>
        <IMGDIV className='img-wrapper'>
          <img src={img} alt={name} loading='lazy' />
        </IMGDIV>
        <div className='info'>
          <p>{name}</p>
          <span className='price'>{formatPrice(price)}</span>
        </div>
      </Link>
    </Card>
  )
}

const IMGDIV = styled.div``

const Card = styled.article`
  overflow: hidden;
  padding-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover .img-wrapper {
    transform: scale(1.025);
    transition: 0.5s;
  }

  &:hover .info .price {
    font-weight: 700;
    transition: 0.5s;
  }

  .img-wrapper {
    width: 100%;
    overflow: hidden;
    transition: 0.5s;
    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }

  .info {
    text-align: center;
    p {
      font-weight: 700;
      font-size: 1rem;
      line-height: 25px;
      font-family: 'Baloo 2', cursive;
      color: #1d1d1d;
    }
    .price {
      font-weight: 400;
      font-family: 'Lato', sans-serif;
      font-size: 1rem;
      line-height: 19px;
      color: #024e82;
      transition: 0.5s;
    }
  }
  a {
    text-decoration: none;
  }
`
export default ProductCard
