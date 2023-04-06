import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
  const handleForm = (e) => {
    e.preventDefault()
  }
  return (
    <Wrapper>
      <form  onClick={() => handleForm()}>
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

const Wrapper = styled.form`
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

    .name {
      flex: 1;
      input {
        width: 100%;
        border: 1px solid #ebebeb;
        height: 48px;
        padding: 0 0.5rem;
      }
    }
    .email {
      flex: 1;
      input {
        width: 100%;
        border: 1px solid #ebebeb;
        height: 48px;
        padding: 0 0.5rem;
      }
    }
  }
  .text {
    width: 100%;
    margin-bottom: 2rem;
    textarea {
      width: 100%;
      resize: none;
      border: 1px solid #ebebeb;
      padding: 0 0.5rem;
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
