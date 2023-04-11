import React, { useEffect } from 'react'
import styled from 'styled-components'
import AncrButton from './AncrButton'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Promo = () => {
  useEffect(()=>{
   Aos.init({duration: 1000})
  },[])
  return (
    <Wrapper>
      <div className='promo-wrapper'>
        <div className='left card' data-aos='zoom-in'>
          <div className='card-content'>
            <h3>peace of mind</h3>
            <p>
              A one-stop platform for all your fashion needs, hassle-free.{' '}
              <br />
              Buy with a peace of mind.
            </p>
            {/* <a href='#new_arrival'>Buy now</a> */}
            <AncrButton href='#new_arrival' type='secondary' label='buy now' />
          </div>
        </div>
        <div className='right card' data-aos='zoom-in'>
          <div className='card-content'>
            <h3>Buy 2 Get 1 Free</h3>
            <p>
              End of season sale. Buy any 2 items of your <br />
              choice and get 1 free.
            </p>
            {/* <a href='#new_arrival'>Buy now</a> */}
            <AncrButton href='#new_arrival' type='secondary' label='buy now' />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0rem;

  .promo-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    .card {
      background: #000000;
      min-height: 26.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      padding: 1rem;

      .card-content {
        text-align: center;
        font-family: 'Lato', sans-serif;
        h3 {
          text-transform: uppercase;
          font-style: normal;
          font-weight: 300;
          font-size: 2rem;
          line-height: 48px;
        }
        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 130%;
          padding: 1.4rem 0;
        }

        // a {
        //   background: #ffffff;
        //   box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.04);
        //   color: #024e82;
        //   font-size: 14px;
        //   text-decoration: none;
        //   padding: 1rem 2rem;
        //   display: inline-block;
        //   
        //   text-transform: uppercase;
        // }
      }
    }
  }

  @media screen and (min-width: 480px) {
    padding: 4rem 0rem;

    .promo-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 780px) {
    padding: 4rem 0;

    .promo-wrapper {
      grid-template-columns: 1.5fr 1fr;
    }
  }
`

export default Promo
