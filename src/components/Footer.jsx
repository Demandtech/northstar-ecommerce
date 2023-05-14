import React, { useState } from 'react'
import styled from 'styled-components'
import { FaChevronRight } from 'react-icons/fa'
import visa from '../assets/images/visa.webp'
import master from '../assets/images/master.webp'
import electron from '../assets/images/electron.webp'
import paypal from '../assets/images/paypal.webp'
import { useUserContext } from '../contexts/userContext'

const Footer = () => {
  const [email, setEmail] = useState('')
  const {handleNewsLetter} = useUserContext()

  return (
    <Wrapper>
      <div className='footer-wrapper'>
        <ul className='first'>
          <li>
            <strong>Company Info</strong>
          </li>
          <li>About Us</li>
          <li>Latest Posts</li>
          <li>Contact Us</li>
          <li>Shop</li>
        </ul>
        <ul className='second'>
          <li>
            <strong>help links</strong>
          </li>
          <li>Tracking</li>
          <li>Order</li>
          <li>Status</li>
          <li>Delivery</li>
          <li>Shipping</li>
          <li>Info FAQ</li>
        </ul>
        <ul className='third'>
          <strong>useful links</strong>
          <li>Special</li>
          <li>Offers</li>
          <li>Gift Cards</li>
          <li>Advetising</li>
          <li>Terms of Use</li>
        </ul>
        <form className='fourth' onSubmit={(e)=>{
          e.preventDefault()
          handleNewsLetter(email)
        }}>
          <label>
            <strong>get in the know</strong>
          </label>
          <div className='input-control'>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Enter email' />
            <button>
              <FaChevronRight />
            </button>
          </div>
        </form>
      </div>
      <div className='footer-floor'>
        <div className='left'>
          <p> &copy; {new Date().getFullYear()} eCommerce</p>
          <p><span>Privacy Policy</span> <span>Term & Conditions</span></p>
        </div>
        <div className="right">
           <img src={visa} alt="card payment" />
           <img src={master} alt="card payment" />
           <img src={electron} alt="card payment" />
           <img src={paypal} alt="card payment" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: 4rem 1rem 0 1rem;
  background: #fbfbfb;
  .footer-wrapper {
    padding-bottom: 4rem;
    border-bottom: 1px solid #e8e8e8;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    ul {
      list-style-type: none;

      strong {
        display: block;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.05em;
        padding-bottom: 2rem;
        font-family: 'Arimo', sans-serif;
      }

      li {
        font-size: 14px;
        line-height: 28px;
        color: #1d1d1d;
        font-family: 'Lato', sans-serif;
      }
    }

    .fourth {
      label {
        font-family: 'Arimo', sans-serif;
        display: block;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.05em;
        padding-bottom: 2rem;
      }
      .input-control {
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          border: none;
          border-bottom: 1px solid #1d1d1d;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 48px;
          background: transparent;
          &::placeholder {
            color: #555555;
          }
          &:focus {
            outline: none;
          }
        }
        button {
          all: unset;
          cursor: pointer;
        }
      }
    }
  }

  .footer-floor {
    font-family: 'Lato', sans-serif;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .left {
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      color: #1d1d1d;
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      img {
        filter: grayscale(8);
      }
    }
  }

  @media screen and (min-width: 480px) {
    padding: 4rem 2rem 0 2rem;
    .footer-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
    .footer-floor {
      flex-direction: row;
      justify-content: space-between;

      .left {
        text-align: left;
      }
    }
  }

  @media screen and (min-width: 780px) {
    padding: 4rem 4rem 0 4rem;

    .footer-wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default Footer
