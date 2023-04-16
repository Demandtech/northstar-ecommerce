import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaRegUser, FaTimes } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { useCartContext } from '../contexts/cartContext'
import { useUserContext } from '../contexts/userContext'
import UserSetting from './UserSetting'

const Navbar = () => {
  const { total_items } = useCartContext()
  const [showLinks, setShowLinks] = useState(false)
  const { authenticated, handleOpenSetup, openSetup } = useUserContext()
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const navHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${navHeight}px`
      linksContainerRef.current.style.opacity = 1
    } else {
      linksContainerRef.current.style.height = `0px`
      linksContainerRef.current.style.opacity = 0
    }
  }, [showLinks])

  

  return (
    <Wrapper>
      <div className='nav-wrapper'>
        <Link className='logo' to={'/'}>
          NorthStar
        </Link>
        <ul ref={linksContainerRef}>
          <div className='nav_list' ref={linksRef}>
            <li>
              <NavLink className={'nav-link'}  onClick={() => setShowLinks(false)} to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={'nav-link'} onClick={() => setShowLinks(false)} to={'/about'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={'nav-link'} onClick={() => setShowLinks(false)} to={'contact'}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className={'nav-link'} onClick={() => setShowLinks(false)} to={'cart'}>
                Cart
              </NavLink>
            </li>
          </div>
        </ul>
        <div className='controls'>
          <div>
            {authenticated ? (
              <div className='user-container'>
                <button className='btn' onClick={handleOpenSetup}>
                  <FaRegUser className='icon' />
                </button>
                {openSetup && <UserSetting />}
              </div>
            ) : (
              <Link className='login-link' to={'login'}>Login</Link>
            )}
          </div>
          <button className='btn'>
            <FiShoppingBag className='icon' />
            <div className='cart-num'>{total_items}</div>
          </button>
          <button className='btn' onClick={() => setShowLinks(!showLinks)}>
            {showLinks ? (
              <FaTimes className='icon' />
            ) : (
              <FaBars className='icon' />
            )}
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  width: 1440px;
  .nav-wrapper {
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    min-height: 75px;
    padding: 0 1rem;
    position: fixed;
    background: #ffffff;
    z-index: 100;
    .logo {
      color: #1d1d1d;
      font-weight: 400;
      font-size: 1.5rem;
      font-family: 'Lato', sans-serif;
      line-height: 43px;
      text-decoration: none;
    }
    ul {
      position: absolute;
      top: 75px;
      list-style-type: none;
      left: 0;
      width: 100%;
      overflow: hidden;
      z-index: 100;
      background: #ffffff;
      transition: 0.5s all ease;
      border-top: 2px solid #1d1d1d;

      .nav_list {
        padding: 0 1rem;

        li {
          padding: 0.5rem 0;

          .nav-link {
            text-decoration: none;
            font-weight: 700;
            color: #000000;
            font-family: 'Arimo', sans-serif;
          }

          .active {
            color: #024e82;
          }
        }
      }
    }
    .controls {
      .login-link {
        text-decoration: none;
        font-weight: 500;
        color: #b1b1b1;
      }
      display: flex;
      gap: 1rem;
      margin-left: auto;

      .user-container{
        position: relative;
      }

      .btn {
        all: unset;
        cursor: pointer;

        .icon {
          font-size: 1.2rem;
        }
      }

      .btn:nth-child(2) {
        position: relative;

        .cart-num {
          position: absolute;
          background: #024e82;
          color: #ffffff;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          lineheight: 12.57px;
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          top: -10px;
          right: -8px;
        }
      }
    }
  }
  @media screen and (min-width: 480px) {
    .nav-wrapper {
      padding: 0 2rem;
      p {
        font-size: 2.25rem;
      }
      ul {
        .nav_list {
          padding-left: 2rem;
        }
      }
    }
  }

  @media screen and (min-width: 780px) {
    .nav-wrapper {
      padding: 0 4rem;
      p {
        font-size: 2.25rem;
      }

      ul {
        height: auto !important;
        position: static;
        margin-left: 7rem;
        border-top: none;
        opacity: 1 !important;

        .nav_list {
          display: flex;
          gap: 1rem;
          border-top: none;
          z-index: 200;
        }
      }

      .controls {
        btn:nth-child(3) {
          display: none;
        }
      }
    }
  }
`

export default Navbar
