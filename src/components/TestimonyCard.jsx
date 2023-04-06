import React from 'react'
import styled from 'styled-components'

const TestimonyCard = ({ img, icon, text, name }) => {
  return (
    <Wrapper>
      <div className='img-wrapper'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <img src={icon} alt='quote-icon' />
        <p>{text}</p>
        <span>{name}</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  .img-wrapper {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    align-self: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .content {
    font-family: 'Baloo 2', cursive;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    img {
      width: 2rem;
    }
    p {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
    span {
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 780px) {
    flex-direction: row;
    max-width: 900px;
    margin: 0 auto;
    .img-wrapper {
      min-width: 200px;
      max-width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .content {
      font-family: 'Baloo 2', cursive;
      font-weight: 500;
      line-height: 36px;
      text-align: left;
      img {
        width: 2rem;
      }
      p {
        margin-top: 0.5rem;
        font-size: 1.5rem;
      }
      span {
        margin-top: 1rem;
        font-size: 1.2rem;
      }
    }
  }
`
export default TestimonyCard
