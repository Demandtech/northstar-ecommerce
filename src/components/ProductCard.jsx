import React, { useEffect } from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../contexts/productsContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ProductCard = ({ id, name, img, price, index }) => {
  const { getSingleProduct } = useProductsContext()
  useEffect(()=>{
    Aos.init({duration: 1000})
  }, [])
  let animation = ''
  if (index == 0) {
    animation = 'fade-right'
  } else if (index == 1) {
    animation = 'fade-down'
  } else if (index == 2) {
    animation = 'fade-up'
  } else if (index == 3) {
    animation = 'fade-left'
  }
  return (
    <Card data-aos={animation}>
      <Link to={`/product/${id}`} onClick={() => getSingleProduct(id)}>
        <div className='img-wrapper'>
          <img src={img} alt={name} loading='lazy'/>
        </div>
        <div className='info'>
          <p>{name}</p>
          <span>{formatPrice(price)}</span>
        </div>
      </Link>
    </Card>
  )
}

const Card = styled.article`
  .img-wrapper {
    width: 100%;

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
    span {
      font-weight: 400;
      font-family: 'Lato', sans-serif;
      font-size: 1rem;
      line-height: 19px;
      color: #024e82;
    }
  }
  a {
    text-decoration: none;
  }
`
export default ProductCard
