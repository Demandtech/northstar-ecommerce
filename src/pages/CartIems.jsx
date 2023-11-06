import styled from 'styled-components'
import { useCartContext } from '../contexts/cartContext'
import { NavLink, Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import { Quantity, CartTotal } from '../components'
import { FaTimes } from 'react-icons/fa'

const CartIems = () => {
  const { cart, deleteCartItem, loading } = useCartContext()
  
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

  if (loading) {
    return <Loader loading={loading} />
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
                        src={item.product.img}
                        alt=''
                      />
                    </td>
                    <td>
                      <strong>{item.product.name}</strong>
                    </td>
                    <td>{formatPrice(item.product.price)}</td>
                    <td>
                      <Quantity id={item.id} quantity={item.quantity} />
                    </td>
                    <td>{formatPrice(item.amount)}</td>
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
        text-transform: uppercase;
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
          font-size: 0.8rem;
          line-height: 19px;
          color: #555555;

          strong {
            font-family: 'Baloo 2', cursive;
          }

          button {
            all: unset;
            cursor: pointer;
            transition: 0.5s;
            &:hover {
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
          font-size: 0.7rem;
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
      font-size: 1.2rem;
      padding: 1rem 2rem;
      text-decoration: none;
      color: #ffffff;
      font-weight: 500;
      border: 2px solid #024e82;
      background-image: -webkit-linear-gradient(
        30deg,
        #024e82 50%,
        transparent 50%
      );
      background-image: linear-gradient(30deg, #024e82 50%, transparent 50%);
      background-size: 600px;
      background-repeat: no-repeat;
      background-position: 0%;
      -webkit-transition: all 300ms ease-in-out;
      transition: all color 300ms ease-in-out;

      &:hover {
        background-position: 100%;
        color: #024e82;
      }
    }
  }

  @media screen and (min-width: 480px) {
    padding: 2rem;
    .container {
      .cart-wrapper {
        margin-top: 2rem;
        table {
          tr {
            td {
              font-size: 1rem;
            }
            th {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 780px) {
    padding: 1rem 4rem;
  }
`

export default CartIems
