import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

const Input = ({ type, name, placeholder, onblur, onchange, value, error,id}) => {
  const [viewPass, setViewPass] = useState(false)
  if (type === 'password') {
    return (
      <Wrapper>
        <div className='input-control'>
          <input
            name={name}
            value={value}
            type={viewPass ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={onchange}
            className={`${error ? 'error-input' : ''}`}
            onBlur={onblur}
            id={id?.id}
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
        <div className='input_error'>
          {error && (
            <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>
          )}
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper className='input-control'>
      <div className='input-control'>
        <input
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onchange}
          className={`${error ? 'error-input' : ''}`}
          onBlur={onblur}
        />
        <div className='input_error'>
          {error && (
            <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
.input-control{           
     position: relative;
     margin-bottom: 1rem;

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

       &::placeholder{
        font-size:.8rem;
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
`

export default Input
