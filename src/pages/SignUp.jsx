import { useState } from 'react';
import img from '../assets/images/register-img.webp';
import styled from 'styled-components';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useUserContext } from '../contexts/userContext';
import { Link, useNavigate } from 'react-router-dom';
import { checkInput } from '../utils/helpers';
import { Input, Button } from '../components/reusable';
import { toast } from 'react-toastify';

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  re_password: '',
};

const SignUp = () => {
  const navigate = useNavigate();
  const { handleRegister, error, btnLoading } = useUserContext();
  const [inputsError, setInputsError] = useState({});

  const [values, setValues] = useState(initialState);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  }

  async function onsubmit(e) {
    e.preventDefault();
    if (
      !values.email ||
      !values.first_name ||
      !values.last_name ||
      !values.password ||
      !values.re_password
    ) {
      toast.error('All Inputs are compulsory!');
    } else {
      const isSuccess = await handleRegister(values);
      if (isSuccess) {
        setValues(initialState);
        navigate('/auth/login');
      }
    }
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='left'>
          <p>
            <Link to={-1}>NORTHSTAR</Link>
          </p>
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
                  <p>Sign up with Facebook</p>
                </div>
              </div>
            </div>
            <div className='divider'>
              <b>- OR -</b>
            </div>
            <form onSubmit={onsubmit}>
              <Input
                name='first_name'
                value={values.first_name}
                type='text'
                placeholder='Enter Your First Name'
                error={inputsError.first_name}
                onchange={handleChange}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError)
                }
              />

              <Input
                name='last_name'
                value={values.last_name}
                type='text'
                placeholder='Enter Your Last Name'
                error={inputsError.last_name}
                onchange={handleChange}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError)
                }
              />

              <Input
                name='email'
                value={values.email}
                type='text'
                placeholder='Enter Your Email Address'
                onchange={handleChange}
                error={inputsError.email}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError)
                }
              />
              <Input
                name='password'
                value={values.password}
                type='password'
                placeholder='Enter Password'
                onchange={handleChange}
                error={inputsError.password}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError, values)
                }
              />

              <Input
                name='re_password'
                value={values.re_password}
                type='password'
                placeholder='Comfirm Password'
                onchange={handleChange}
                error={inputsError.re_password}
                onblur={(event) =>
                  checkInput(event, inputsError, setInputsError, values)
                }
              />

              <Button
                inputsError={inputsError}
                loading={btnLoading}
                text={`Create Account`}
              />
              <div className='link'>
                <p>
                  Already a member
                  <Link to={'/auth/login'}>Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
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
          padding-bottom: 2rem;
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

          .link {
            margin-top: 1.5rem;
            color: rgba(0, 0, 0, 0.12);

            a {
              all: unset;
              text-decoration: none;
              color: #024e82;
              margin-left: 1rem;
              cursor: pointer;
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
`;
export default SignUp;
