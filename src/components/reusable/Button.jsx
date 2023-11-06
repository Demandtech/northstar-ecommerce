import React from 'react'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'
const Button = ({ loading, text, onclick, type }) => {
  return (
    <Wrapper>
      <button
        disabled={loading}
        className='submit-btn'
        type={type}
        onClick={onclick}
      >
        {loading ? (
          <BeatLoader color='#ffffff' loading={loading} size={10} />
        ) : (
          text
        )}
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
      cursor: not-allowed;
      color: #ffffff;
      background: #024e82;
      opacity: 0.8;
    }
  }
`

export default Button
