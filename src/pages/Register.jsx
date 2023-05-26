import React, { useState } from 'react'
import img from '../assets/images/register-img.webp'
import styled from 'styled-components'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { useUserContext } from '../contexts/userContext'
import { Link, useNavigate } from 'react-router-dom'
import { checkInput } from '../utils/helpers'
import Input from '../components/reusable/Input'

const Register = () => {
  const navigate = useNavigate()
  const { handleRegister, authenticated, error } = useUserContext()
  const [inputsError, setInputsError] = useState({})

  const [newUser, setNewUser] = useState({
    fName: '',
    lName: '',
    email: '',
    pass1: '',
    pass2: '',
  })

  if (authenticated) {
    return navigate('/login')
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='left'>
          <p>NORTHSTAR</p>
        </div>
        <div className='right'>
          <div className='right-wrapper'>
            <div className='right-header'>
              <h2>Create Account</h2>
              <div className='social'>
                <div className='google'>
                  <FaGoogle className='icon' />
                  <p>Sign up with Google</p>
                </div>
                <div className='facebook'>
                  <FaFacebook className='icon' />
                  <p>Sign up with facebook</p>
                </div>
              </div>
            </div>
            <div className='divider'>
              <b>- OR -</b>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleRegister(newUser)
              }}
            >
              <div className='error'>
                {error.show && <span>{error.msg}</span>}
              </div>
              <Input
                name='fname'
                value={newUser.fName}
                type='text'
                placeholder='Enter Your First Name'
                error={inputsError.fname}
                onchange={(e) =>
                  setNewUser({ ...newUser, fName: e.target.value })
                }
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError)
                }
              />
              <Input
                name='lname'
                value={newUser.lName}
                type='text'
                placeholder='Enter Your Last Name'
                error={inputsError.lname}
                onchange={(e) =>
                  setNewUser({ ...newUser, lName: e.target.value })
                }
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError)
                }
              />
              <Input
                name='email'
                value={newUser.email}
                type='text'
                placeholder='Enter Your Email Address'
                onchange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                error={inputsError.email}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError)
                }
              />
              <Input
                name='pass1'
                value={newUser.pass1}
                type='password'
                placeholder='Enter Password'
                onchange={(e) =>
                  setNewUser({ ...newUser, pass1: e.target.value })
                }
                error={inputsError.pass1}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError, newUser)
                }
              />
              <Input
                name='pass2'
                value={newUser.pass2}
                type='password'
                placeholder='Comfirm Password'
                onchange={(e) =>
                  setNewUser({ ...newUser, pass2: e.target.value })
                }
                error={inputsError.pass2}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError, newUser)
                }
              />

              <button className='submit-btn' type='submit'>
                Create Account
              </button>
              <div className='login-link'>
                <span>
                  Already have an account ? <Link to={'/login'}>Login</Link>
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
  font-family: 'Inter', sans-serif;

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
      padding-bottom: 2rem;

      .right-wrapper {
        width: 100%;
        padding: 0 2rem;

        .right-header {
          padding: 1.5rem 0;

          h2 {
            padding-bottom: 2rem;
          }
          .social {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 2rem;

            .facebook {
              flex: 1;
              display: flex;
              gap: 0.5rem;
              border: 1px solid rgba(0, 0, 0, 0.12);
              padding: 10px;
              color: #181818;
              border-radius: 0.5rem;
              align-items: center;
              cursor: pointer;
              transition: 0.3s;

              &:hover {
                background: lightgray;
              }
              .icon {
                color: #0077b5;
                font-size: 1.5rem;
              }
            }
            .google {
              flex: 1;
              display: flex;
              gap: 0.5rem;
              border: 1px solid rgba(0, 0, 0, 0.12);
              padding: 10px;
              color: #181818;
              align-items: center;
              border-radius: 0.5rem;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
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
          color: rgba(26, 23, 23, 0.38);
          font-weight: 800;
          font-size: 1.5rem;
          line-height: 29px;
        }
        form {
          .error {
            color: red;
            padding-bottom: 1rem;
            text-align: center;
            span {
              font-size: 0.8rem;
            }
          }

          .submit-btn {
            margin-top: 2rem;
            width: 100%;
            text-align: center;
            padding: 0.7rem;
            border: none;
            border-radius: 0.5rem;
            font-size: 1.2rem;
            color: #ffffff;
            background: #024e82;
            border: 2px solid #024e82;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
              background: #ffffff;
              color: #024e82;
            }

            &:disabled {
              background: gray;
              border: none;
              color: #ffffff;
            }
          }

          .login-link {
            margin-top: 1.5rem;
            color: rgba(0, 0, 0, 0.12);

            a {
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
        padding-bottom: 0;

        .right-wrapper {
          max-width: 500px;
          padding: 1rem 0 1rem 0;

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
export default Register
