import React, { useState } from 'react'
import img from '../assets/images/login-img.jpg'
import styled from 'styled-components'
import { FaGoogle, FaFacebook, FaEyeSlash, FaEye } from 'react-icons/fa'
import { useUserContext } from '../contexts/userContext'
import { Link } from 'react-router-dom'

const Login = () => {
  const [viewPass, setViewPass] = useState(false)
  const [user, setUser] = useState({ email: '', password: '' })
  const { emailLogin, googleLogin, facebookLogin } = useUserContext()
  return (
    <Wrapper>
      <div className='container'>
        <div className='left'>
          <p>NORTHSTAR</p>
        </div>
        <div className='right'>
          <div className='right-wrapper'>
            <div className='right-header'>
              <h2>Sigin Account</h2>
              <div className='social'>
                <div className='google' onClick={googleLogin}>
                  <FaGoogle className='icon' />
                  <p>Sign in with Google</p>
                </div>
                <div className='facebook' onClick={facebookLogin}>
                  <FaFacebook className='icon' />
                  <p>Sign in with facebook</p>
                </div>
              </div>
            </div>
            <div className='divider'>
              <b>- OR -</b>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleLogin(user)
              }}
            >
              <div className='input-control'>
                <input
                  value={user.email}
                  type='text'
                  placeholder='Email Address'
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className='input-control'>
                <input
                  type={viewPass ? 'text' : 'password'}
                  placeholder='Password'
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button
                  className='password-setting'
                  type='button'
                  onClick={() => setViewPass(!viewPass)}
                >
                  {viewPass ? (
                    <FaEye className='icon' />
                  ) : (
                    <FaEyeSlash className='icon' />
                  )}
                </button>
              </div>
              <button onClick={emailLogin} className='submit-btn' type='submit'>
                Login
              </button>
              <div className='login-link'>
                <span>
                  No account yet ? <Link to={'/register'}>Register</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .container {
    min-height: 100vh;
    display: flex;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: top;
    flex-direction: column;

    .left {
      flex: 1;
      display: grid;
      place-items: center;
      min-height: 200px;

      p {
        font-weight: 700;
        font-size: 2rem;
        border: 2px solid #ffffff;
        color: #ffffff;
        padding: 0.5rem 1rem;
      }
    }
    .right {
       flex: 2;
      background: #ffffff;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      display: flex;
      justify-content: center;

       .right-wrapper {
        width: 100%;
        padding: 0 2rem;

        .right-header {
          padding: 2rem 0;
          h2 {
            padding-bottom: 2rem;
          }
          .social {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            .facebook {
              display: flex;
              gap: 0.5rem;
              border: 1px solid rgba(0, 0, 0, 0.12);
              padding: 10px;
              color: #181818;
              border-radius: 0.5rem;
              align-items: center;
              cursor: pointer;
              transition: .3s;
              &:hover{
                background: lightgray;
              }
              .icon {
                color: #0077b5;
                font-size: 1.5rem;
              }
            }
            .google {
              display: flex;
              gap: 0.5rem;
              border: 1px solid rgba(0, 0, 0, 0.12);
              padding: 10px;
              color: #181818;
              align-items: center;
              border-radius: 0.5rem;
              cursor: pointer;
               transition: .3s;
              &:hover{
                background: lightgray;
              }
              .icon {
                color: #db4437;
                font-size: 1.5rem;
              }
            }
          }
        }
        .divider {
          text-align: center;
          padding-bottom: 2rem;
          color: rgba(26, 23, 23, 0.38);
          font-weight: 800;
          font-size: 1.5rem;
          line-height: 29px;
        }
        form {
          .input-control{
            margin-bottom: 1.5rem;
            position: relative;

            input {
              width: 100%;
              padding: .5rem 0;
              font-size: 1rem;
              border: none;
              border-bottom: 1px solid rgba(0, 0, 0, 0.12);
              color: color: rgba(26, 23, 23, 0.38);
              line-height: 29px;
              background: #ffffff;
              

              &:focus{
                outline: none;
                border-bottom-color: #024e82;
              }
            }

            .password-setting{
              all: unset;
              position: absolute;
              right: 0;
              bottom: 50%;
              transform: translateY(50%);
              cursor: pointer;

              .icon{
               color:rgba(26, 23, 23, 0.38);
              }
            }
         }

         .submit-btn{
          margin-top: 2rem;
          width: 100%;
          text-align: center;
          padding: .7rem;
          border: none;
          border-radius: .5rem;
          font-size: 1.2rem;
          color: #ffffff;
          background: #024e82;
          cursor: pointer;
          transition: .3s;
          border: 2px solid  #024e82;

          &:hover{
            background: #ffffff;
            color: #024e82;
            
          }
         }

         .login-link{
          margin-top: 1.5rem;
          color: rgba(0, 0, 0, 0.12);

          a{
            text-decoration: none;
            color: #024e82;
          }
         }
        }
      }
    }
  }
  @media screen and (min-width: 780px) {
    .container {
      background-size: 60% 100%;
      background-position: left;
      flex-direction: row;
      .left {
        flex: 1;
        p {
          font-size: 3rem;
        }
      }
      .right {
        flex: 1;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        background: #ffffff;
        padding: 4rem 0 2rem 0;

        .right-wrapper {
           max-width: 500px;

          .right-header {
            .social {
              flex-direction: row;
            }
          }
        }
      }
    }
  }
`

export default Login
