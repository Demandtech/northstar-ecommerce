import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
  const handleForm = (e) => {
    e.preventDefault()
  }
  return (
    <Wrapper>
      <form onSubmit={handleForm}>
        <div className='inputs-control'>
          <div className='name'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />
          </div>
        </div>
        <div className='text'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' cols='30' rows='10'></textarea>
        </div>
        <button>SEND MESSAGE</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  label {
    font-family: 'Lato', sans-serif;
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: #555555;
  }
  .inputs-control {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1rem;

    input {
      width: 100%;
      border: 2px solid #ebebeb;
      height: 48px;
      padding: 0 0.5rem;
      border-radius: 0.2rem;
      transition: all 0.5s;

      &:focus {
        outline: none;
        border-color: #024e82;
        transform: translateY(-2px);
      }
    }

    .name,
    .email {
      flex: 1;
    }
  }
  .text {
    width: 100%;
    margin-bottom: 2rem;

    textarea {
      width: 100%;
      resize: none;
      border: 2px solid #ebebeb;
      padding: 0.5rem;
      border-radius: 0.2rem;
      transition: all 0.5s;

      &:focus {
        outline: none;
        border-color: #024e82;
        transform: translateY(-2px);
      }
    }
  }
  button {
    all: unset;
    padding: 1rem 2rem;
    background: #024e82;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      transform: translateY(-1px);
    }
  }

  @media screen and (min-width: 780px) {
    .inputs-control {
      flex-direction: row;
    }
  }
`

export default ContactForm
