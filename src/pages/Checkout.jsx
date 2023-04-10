import React from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { useCartContext } from '../contexts/cartContext'
import { formatPrice } from '../utils/helpers'

const Checkout = () => {
  const { cart, total_amount } = useCartContext()
  return (
    <Wrapper>
      <div className='container'>
        <div className='links'>
          <NavLink to={'/'}>Home</NavLink> /
          <NavLink to={'/checkout'}>checkout</NavLink>
        </div>
        <div className='billing'>
          <h2>Billing details</h2>
          <form action='#'>
            <div className='input-control'>
              <label htmlFor='full_name'>
                Full Name
                <sup>*</sup>
              </label>
              <input type='text' id='full_name' placeholder='Enter full name' />
            </div>
            <div className='input-control'>
              <label htmlFor='address'>
                Street Address
                <sup>*</sup>
              </label>
              <input
                type='text'
                id='address'
                placeholder='House number and street name'
              />
            </div>
            <div className='input-control'>
              <label htmlFor='city'>
                Town/City
                <sup>*</sup>
              </label>
              <input type='text' id='city' placeholder='Enter city' />
            </div>
            <div className='input-control'>
              <label htmlFor='full_name'>
                Phone
                <sup>*</sup>
              </label>
              <input type='text' id='phone' placeholder='Enter Mobile Number' />
            </div>
            <div className='input-control'>
              <label htmlFor='email'>
                Email Address
                <sup>*</sup>
              </label>
              <input type='text' id='email' placeholder='Enter Email Address' />
            </div>
          </form>
        </div>
        <div className='order'>
          <h3>Your order</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((ca, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ca.name}</td>
                    <td>{formatPrice(ca.price)}</td>
                  </tr>
                )
              })}
              <tr>
                <td>Subtotal</td>
                <td>{formatPrice(total_amount)}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <strong>{formatPrice(total_amount)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='btn-container'>
          <p>
            Cash on delivery. Please contact us if you require assistance or
            wish to make alternate arrangements.
          </p>
          <div className='btn-wrapper'>
            <Link className='order-btn'>Place order</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 75px;
  padding: 2rem 1rem;

  .links {
    a {
      font-weight: 500;
      font-size: 15px;
      line-height: 17px;
      color: #888888;
      text-decoration: none;
      text-transform: uppercase;
    }
    .active {
      color: #1d1d1d;
      font-weight: 900;
      font-size: 15px;
    }
  }
  .billing {
    h2 {
      font-family: 'Arimo', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      line-height: 48px;
      padding: 1rem 0;
    }
    form {
      width: 100%;
      .input-control {
        width: 100%;
        margin-bottom: 1rem;
        label {
          display: block;
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 19px;
          color: #555555;
          font-family: 'Lato', sans-serif;
          margin-bottom: 0.5rem;
          sup {
            color: #d6763c;
            font-size: 1rem;
          }
        }
        input {
          width: 100%;
          height: 48px;
          border: 1px solid #ebebeb;
          padding-left: 1rem;
        }
      }
    }
  }

  .order {
    padding-top 4rem ;
    margin-bottom: 2rem;
    h3 {
      font-family: 'Arimo', sans-serif;
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      color: #1d1d1d;
      margin-bottom: 1rem;
    }

    table {
      width: 100%;
      border: 1px solid #ebebeb;
      border-collapse: collapse;
      td {
        padding: 1rem;
        border-bottom: 1px solid #ebebeb;
      }

      th {
        text-align: left;
        padding: 1rem ;
        border-bottom: 1px solid #ebebeb;
      }
    }
  }
  .btn-container{
    border: 1px solid #ebebeb;
    padding: 1rem;
    p{
      background: #FBFBFB;
      padding: 1rem;
      border: 1px solid #EBEBEB;
      margin-bottom: 2rem;
    }
   .btn-wrapper{
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1rem;
   .order-btn{
    
    display: inline-block;
    background:#d6763c;
    color: #ffffff;
    padding: 1rem 2rem;
    text-decoration: none;
  }
}
}

  @media screen and (min-width: 480px) {
    padding: 2rem;

    form{
      max-width: 500px;
    }
  }

  @media screen and (min-width: 780px) {
    padding: 1rem 4rem;
  }
`

export default Checkout
