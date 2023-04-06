import React from 'react'
import styled from 'styled-components'
import heroBg from '../assets/images/about-hero-bg.jpeg'
import { Category, Founders } from '../components'

const About = () => {
  return (
    <Wrapper>
      <div className='hero'>
        <div className='hero-content'>
          <h2>About Northstar</h2>
        </div>
      </div>
      <div className='sections'>
        <Category />
        <Founders />
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
  .sections {
    padding: 4rem 1rem;
  }

  @media screen and (min-width: 480px) {
    .hero {
      .hero-content {
        padding-left: 2rem;
        padding-bottom: 2rem;
      }
    }
    .sections {
      padding: 4rem 2rem;
    }
  }

  @media screen and (min-width: 780px) {
    .hero {
      .hero-content {
        padding-left: 4rem;
        padding-bottom: 2rem;
      }
    }
    .sections {
      padding: 4rem;
    }
  }
`

export default About
