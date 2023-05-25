import React, { useState } from 'react'
import img from '../assets/images/register-img.webp'
import styled from 'styled-components'
import { FaGoogle, FaFacebook, FaEyeSlash, FaEye } from 'react-icons/fa'
import { useUserContext } from '../contexts/userContext'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [viewPass, setViewPass] = useState(false)
  const { handleRegister, messages, authenticated } = useUserContext()

  //console.log(messages)
  const [newUser, setNewUser] = useState({
    fName: '',
    lName: '',
    email: '',
    pass1: '',
    pass2: '',
  })
  const [inputsError, setInputsError] = useState({})

  useUserContext()

  if (authenticated) {
    navigate('/login')
  }

  // const checkInput = (e) => {
  //   let name = e.target.name
  //   let value = e.target.value

  //   switch (name) {
  //     case 'fname':
  //       if (value == '') {
  //         setInputsError({
  //           ...inputsError,
  //           fname: 'Fist name can not be blank',
  //         })
  //       } else if (/\d/.test(value)) {
  //         setInputsError({
  //           ...inputsError,
  //           fname: 'First name can not contain number',
  //         })
  //       } else {
  //         setInputsError({
  //           ...inputsError,
  //           error: false,
  //           fname: '',
  //         })
  //       }
  //       break
  //     case 'lname':
  //       if (value == '') {
  //         setInputsError({
  //           ...inputsError,
  //           lname: 'Last name can not be blank',
  //         })
  //       } else if (/\d/.test(value)) {
  //         setInputsError({
  //           ...inputsError,
  //           lname: 'Last name can not contain number',
  //         })
  //       } else {
  //         setInputsError({
  //           ...inputsError,
  //           lname: '',
  //         })
  //       }
  //       break
  //     case 'email':
  //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  //       if (value == '') {
  //         setInputsError({
  //           ...inputsError,
  //           email: 'Email can not be blank',
  //         })
  //       } else if (!emailRegex.test(value)) {
  //         setInputsError({
  //           ...inputsError,
  //           email: 'Wrong email format',
  //         })
  //       } else {
  //         setInputsError({
  //           ...inputsError,
  //           email: '',
  //         })
  //       }
  //       break
  //     case 'pass1':
  //       const passwordRegex =
  //         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/

  //       if (value == '') {
  //         setInputsError({
  //           ...inputsError,
  //           pass1: 'Password can not be blank',
  //         })
  //       } else if (!passwordRegex.test(value)) {
  //         setInputsError({
  //           ...inputsError,
  //           pass1: 'Choose strong password',
  //         })
  //       } else {
  //         setInputsError({
  //           ...inputsError,
  //           pass1: '',
  //         })
  //       }
  //       break
  //     case 'pass2':
  //       console.log(newUser.pass1)
  //       if (value == '') {
  //         setInputsError({
  //           ...inputsError,
  //           pass2: 'Password can not be blank',
  //         })
  //       } else if (newUser.pass1 !== value) {
  //         setInputsError({
  //           ...inputsError,
  //           pass2: 'Passwords does not match',
  //         })
  //       } else {
  //         setInputsError({
  //           ...inputsError,
  //           pass2: '',
  //         })
  //       }

  //       break
  //     default:
  //   }
  // }

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
              <p style={{ paddingBottom: '1rem' }}>
                {(messages.error && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {messages.error}
                  </span>
                )) ||
                  (messages.success && (
                    <span style={{ color: 'green' }}>{messages.success}</span>
                  ))}
              </p>
              <div className='input-control'>
                <input
                  name='fname'
                  value={newUser.fName}
                  type='text'
                  placeholder='First Name'
                  onChange={(e) =>
                    setNewUser({ ...newUser, fName: e.target.value })
                  }
                  className={`${inputsError.fname ? 'error-input' : ''}`}
                />
                {inputsError.fname && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {inputsError.fname}
                  </span>
                )}
              </div>
              <div className='input-control'>
                <input
                  name='lname'
                  value={newUser.lName}
                  type='text'
                  placeholder='Last Name'
                  onChange={(e) =>
                    setNewUser({ ...newUser, lName: e.target.value })
                  }
                  className={`${inputsError.lname ? 'error-input' : ''}`}
                />
                {inputsError.lname && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {inputsError.lname}
                  </span>
                )}
              </div>
              <div className='input-control'>
                <input
                  name='email'
                  value={newUser.email}
                  type='text'
                  placeholder='Email Address'
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className={`${inputsError.email ? 'error-input' : ''}`}
                />
                {inputsError.email && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {inputsError.email}
                  </span>
                )}
              </div>
              <div className='input-control'>
                <input
                  name='pass1'
                  type={viewPass ? 'text' : 'password'}
                  placeholder='Password'
                  value={newUser.pass1}
                  onChange={(e) =>
                    setNewUser({ ...newUser, pass1: e.target.value })
                  }
                  className={`${inputsError.pass1 ? 'error-input' : ''}`}
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
                {inputsError.pass1 && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {inputsError.pass1}
                  </span>
                )}
              </div>
              <div className='input-control'>
                <input
                  name='pass2'
                  type={viewPass ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  value={newUser.pass2}
                  onChange={(e) =>
                    setNewUser({ ...newUser, pass2: e.target.value })
                  }
                  className={`${inputsError.pass2 ? 'error-input' : ''}`}
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
                {inputsError.pass2 && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {inputsError.pass2}
                  </span>
                )}
              </div>
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
              flex: 1;
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
              all:unset;
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

            .error-input{
              border-bottom: 1px solid red;
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
          border: 2px solid  #024e82;
          cursor: pointer;
          transition: .3s;

          

          &:hover{
            background: #ffffff;
            color: #024e82;
            
          }

          &:disabled{
            background: gray;
            border: none;
            color: #ffffff;
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
