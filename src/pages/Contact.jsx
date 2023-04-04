import React from 'react'
import styled from 'styled-components'
import heroBg from '../assets/images/contact-hero-bg.jpeg'

const Contact = () => {
  return (
    <Wrapper>
      <div className='hero'>
        <div className='hero-content'>
          <h2>Contact Us</h2>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 70px;

  .hero {
    background: url(${heroBg});
    background-size: cover;
    background-position: center;
    min-height: calc(50vh - 70px);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: end;

    .hero-content {
      padding-left: 1rem;
      padding-bottom: 2rem;

      h2 {
        font-weight: 400;
        font-size: 2rem;
        line-height: 48px;
        color: #ffffff;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (min-width: 780px) {
    .hero {
      .hero-content {
        padding-left: 2rem;
      }
    }
  }

  @media screen and (min-width: 780px) {
    .hero {
      justify-content: flex-start;
      align-items: end;
    }
  }
`

export default Contact