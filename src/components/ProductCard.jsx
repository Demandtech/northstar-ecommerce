import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../reducers/productsContext'


const ProductCard = ({id, name, img, price }) => {
  const {getSingleProduct} = useProductsContext()
  return (
    <Card>
      <Link to={`/product/${id}`} onClick={()=>getSingleProduct(id)}>
        <div className='img-wrapper'>
          <img src={img} alt='' />
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
  a{
    text-decoration: none;
  }
`
export default ProductCard
