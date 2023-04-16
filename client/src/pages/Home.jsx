import React, { useState } from 'react'
import styled from 'styled-components'
import hero_bg from '../assets/images/hero-bg.jpeg'
import {
  NewArrivals,
  Benefits,
  Promo,
  AncrButton,
  TopSellers,
} from '../components'
// import AncrButton from '../components/AncrButton'

const Home = () => {
  

  return (
    <>
      <Wrapper>
        <section className='hero'>
          <div className='hero-content'>
            <h1>
              stylist picks beat <br />
              the heat
            </h1>
            <AncrButton type='border' href='#new_arrival' label='shop now' />
          </div>
        </section>
        <div className='sections'>
          <NewArrivals />
          <Benefits />
          <Promo />
          <TopSellers />
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  margin-top: 70px;

  .hero {
    background: url(${hero_bg});
    background-size: cover;
    background-position: center;
    min-height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .hero-content {
      text-align: center;
      font-family: 'Lato', sans-serif;
      h1 {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 48px;
        color: #ffffff;
        margin-bottom: 3rem;
      }
    }
  }

  .sections {
    padding: 4rem 1rem;
  }
  @media screen and (min-width: 480px) {
    .section {
      padding: 4rem 2rem;
    }
  }

  @media screen and (min-width: 780px) {
    .hero {
      justify-content: flex-end;

      .hero-content {
        h1 {
          font-size: 3rem;
        }
        padding-right: 7rem;
      }
    }
    .sections {
      padding: 4rem;
    }
  }
`

export default Home
