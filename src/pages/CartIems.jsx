import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cartContext'
import { NavLink, Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import { Quantity, CartTotal } from '../components'
import { FaTimes } from 'react-icons/fa'

const CartIems = () => {
  const { cart, deleteCartItem } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='empty-wrapper'>
          <h3>Cart is empty</h3>
          <Link to='/'>Continue Shopping</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div className='container'>
        <div className='links'>
          <NavLink to={'/'}>Home</NavLink> /
          <NavLink to={'/cart'}>Shopping cart</NavLink>
        </div>
        <div className='cart-wrapper'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                let total = item.price * item.quantity
                return (
                  <tr key={index}>
                    <td>
                      <button onClick={() => deleteCartItem(item.id)}>
                        <FaTimes />
                      </button>
                    </td>
                    <td>
                      <img
                        width={'48px'}
                        height={'48px'}
                        src={item.img}
                        alt=''
                      />
                    </td>
                    <td>
                      <strong>{item.name}</strong>
                    </td>
                    <td>{formatPrice(item.price)}</td>
                    <td>
                      <Quantity id={item.id} quantity={item.quantity} />
                    </td>
                    <td>{formatPrice(total)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <CartTotal />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 75px;
  padding: 2rem 1rem;
  .container {
    margin-bottom: 3rem;
    .links {
      a {
        font-weight: 500;
        font-size: 15px;
        line-height: 17px;
        color: #888888;
        text-decoration: none;
      }
      .active {
        color: #1d1d1d;
        font-weight: 900;
        font-size: 15px;
      }
    }
    .cart-wrapper {
      margin-top: 2rem;
      table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;

        tr {
          border-bottom: 1px solid #ebebeb;
        }

        td {
          font-family: 'Lato', sans-serif;
          width: 25%;
          padding: 1rem 0;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #555555;

          strong {
            font-family: 'Baloo 2', cursive;
          }

          button {
            all: unset;
            cursor: pointer;
            transition: .5s;
            &:hover{
              color: #1b1b1b;
              transform: translateY(-2px);
            }
          }
        }
        th {
          font-family: 'Arimo', sans-serif;
          text-align: left;
          padding-bottom: 1rem;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 23px;
        }
      }
    }
  }
  .empty-wrapper {
    min-height: 50vh;
    display: grid;
    place-items: center;

    a {
      background: #024e82;
      text-decoration: none;
      color: #ffffff;
      text-transform: uppercase;
      padding: 0.4rem 1rem;
    }
  }

  @media screen and (min-width: 480px) {
    padding: 2rem;
  }

  @media screen and (min-width: 780px) {
    padding: 1rem 4rem;
  }
`

export default CartIems
