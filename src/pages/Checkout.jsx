import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCartContext } from '../contexts/cartContext'
import { useUserContext } from '../contexts/userContext'
import { formatPrice } from '../utils/helpers'
import { Input } from '../components/reusable'
import { checkInput } from '../utils/helpers'
import { BeatLoader } from 'react-spinners'

const Checkout = () => {
  const { cart, total_amount } = useCartContext()
  const { handleSubmitBillingAddress, isOrderComplete, btnLoading } =
    useUserContext()
  const navigate = useNavigate()
  const [billing, setBilling] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
    city: '',
  })
  const [inputError, setInputError] = useState({})

  useEffect(() => {
    isOrderComplete && navigate('/order')
  }, [isOrderComplete])

  return (
    <Wrapper>
      <div className='container'>
        <div className='links'>
          <NavLink to={'/'}>Home</NavLink> /
          <NavLink to={'/cart'}>SHOPPING CART</NavLink> /
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

              <Input
                id='full_name'
                placeholder='Enter full name'
                onchange={(e) =>
                  setBilling({ ...billing, fullName: e.target.value })
                }
                type='text'
                value={billing.fullName}
                name='full_name'
                onblur={(event) => checkInput(event, inputError, setInputError)}
                error={inputError.full_name}
              />
            </div>
            <div className='input-control'>
              <label htmlFor='address'>
                Street Address
                <sup>*</sup>
              </label>
              <Input
                id='address'
                placeholder='Enter Address'
                onchange={(e) =>
                  setBilling({ ...billing, address: e.target.value })
                }
                type='text'
                value={billing.address}
                name='address'
                error={inputError.address}
                onblur={(event) => checkInput(event, inputError, setInputError)}
              />
            </div>
            <div className='input-control'>
              <label htmlFor='city'>
                Town/City
                <sup>*</sup>
              </label>

              <Input
                id='city'
                placeholder='Enter city'
                onchange={(e) =>
                  setBilling({ ...billing, city: e.target.value })
                }
                type='text'
                value={billing.city}
                name='city'
                error={inputError.city}
                onblur={(event) => checkInput(event, inputError, setInputError)}
              />
            </div>
            <div className='input-control'>
              <label htmlFor='full_name'>
                Phone
                <sup>*</sup>
              </label>
              <Input
                id='phone'
                placeholder='Enter Mobile Number'
                onchange={(e) =>
                  setBilling({ ...billing, phone: e.target.value })
                }
                type='text'
                value={billing.phone}
                name='phone'
                onblur={(event) => checkInput(event, inputError, setInputError)}
                error={inputError.phone}
              />
            </div>
            <div className='input-control'>
              <label htmlFor='email'>
                Email Address
                <sup>*</sup>
              </label>
              <Input
                id='email'
                placeholder='Enter Email Address'
                onchange={(e) =>
                  setBilling({ ...billing, email: e.target.value })
                }
                type='text'
                value={billing.email}
                onblur={(event) => {
                  console.log(inputError)
                  checkInput(event, inputError, setInputError)
                }}
                error={inputError.email}
                name='email'
              />
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
                    <td>{ca.product.name}</td>
                    <td>{formatPrice(ca.amount)}</td>
                  </tr>
                )
              })}
              <tr>
                <td>Subtotal</td>
                <td>{formatPrice(total_amount)}</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
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
            <button
              disabled={
                Object.values(inputError).some((error) => error !== '') ||
                Object.keys(inputError).length < 1
              }
              onClick={(e) => {
                e.preventDefault()
                if (cart.length > 0) {
                  handleSubmitBillingAddress(billing, total_amount)
                }
              }}
              className='order-btn'
            >
              {btnLoading ? (
                <BeatLoader color='#ffffff' loading={btnLoading} size={10} />
              ) : (
                'Place order'
              )}
            </button>
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
          //height: 48px;
          border: 1px solid #ebebeb;
          padding-left: 1rem;
        }
      }
    }
  }

  .order {
    padding-top: 4rem;
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
        padding: 1rem;
        border-bottom: 1px solid #ebebeb;
      }
    }
  }
  .btn-container {
    border: 1px solid #ebebeb;
    padding: 1rem;
    p {
      background: #fbfbfb;
      padding: 1rem;
      border: 1px solid #ebebeb;
      margin-bottom: 2rem;
    }
    .btn-wrapper {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 1rem;

      .order-btn {
        all: unset;
        display: inline-block;
        background: #d6763c;
        color: #ffffff;
        padding: 1rem 2rem;
        text-decoration: none;
        opacity: 1;
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }
    }
  }

  @media screen and (min-width: 480px) {
    padding: 2rem;

    form {
      max-width: 500px;
    }
  }

  @media screen and (min-width: 780px) {
    padding: 1rem 4rem;
  }
`

export default Checkout
