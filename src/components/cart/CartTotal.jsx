import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'
import { formatPrice } from '../../utils/helpers'

const CartTotal = () => {
  const { total_amount, shipping } = useCartContext()
  return (
    <Wrapper>
      <h4>Cart Totals</h4>
      <div className='total-wrapper'>
        <div className='sub-total'>
          <p>Subtotal</p>
          <span>{formatPrice(total_amount)}</span>
        </div>
        <div className='shipping'>
          <p>Shipping Fee</p>
          <span>{shipping === 0 ? 'FREE!!!' : shipping}</span>
        </div>
        <div className='total'>
          <p>
            <strong>Total</strong>
          </p>
          <span>{formatPrice(total_amount + shipping)}</span>
        </div>
      </div>
      <Link to={'/checkout'}>Proceed to checkout</Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding-bottom: 4rem;
  h4 {
    font-family: 'Arimo', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
    color: #1d1d1d;
  }
  .total-wrapper {
    max-width: 500px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    margin-bottom: 2.5rem;
    .total {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem 0;
      font-family: 'Arimo', sans-serif;
      span {
        font-family: 'Lato', sans-serif;
        color: #555555;
      }
    }
    .sub-total {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem 0;
      color: #555555;
    }
    .shipping {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      padding: 0.8rem 0;
      color: #555555;
    }
  }

  a {
    background: #d6763c;
    color: #ffffff;
    text-decoration: none;
    padding: 1rem 2rem;
    text-transform: uppercase;

    &:hover {
      background: #d6652c;
    }
  }
`

export default CartTotal
