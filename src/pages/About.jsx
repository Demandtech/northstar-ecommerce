import styled from 'styled-components'
import heroBg from '../assets/images/about-hero-bg.webp'
import { Category, Founders, Testimonials } from '../components'

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
      </div>
      <Founders />
      <div className='sections'>
        <Testimonials />
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
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    overflow-x: hidden;

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
    padding: 4rem 1rem 0 1rem;
  }

  @media screen and (min-width: 480px) {
    .hero {
      .hero-content {
        padding-left: 2rem;
        padding-bottom: 2rem;
      }
    }
    .sections {
      padding: 4rem 2rem 0 2rem;
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
      padding: 4rem 4rem 0 4rem;
    }
  }
`

export default About
