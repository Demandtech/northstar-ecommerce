import React from 'react'
import styled from 'styled-components'
import { HomeCard } from '../components'
import { newArrival } from '../utils/datas'

const NewArrivals = () => {
  const [women, men] = newArrival

  return (
    <Wrapper id='new_arrival'>
      <div className='newArrivals-header'>
        <h2>Discover NEW Arrivals</h2>
        <p>Recently added shirts!</p>
      </div>
      <div className='arrival-wrappers'>
        <div className='wrap women'>
          {women.women.map((wom, i) => {
            return (
              <div key={i}>
                <HomeCard {...wom} />
              </div>
            )
          })}
        </div>
        <div className='wrap'>
          {men.men.map((wom, i) => {
            return (
              <div key={i}>
                <HomeCard {...wom} />
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem  1rem;

  .newArrivals-header {
    text-align: center;
    h2 {
      font-weight: 700;
      font-size: 2.125rem;
      line-height: 48px;
      font-family: 'Arimo', sans-serif;
      color: #1d1d1d;
    }
    p {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 48px;
      color: #555555;
    }
  }
  .arrival-wrappers {
    padding-top: 4rem;
    .wrap {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 1.5rem;
    }
    .women {
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 480px) {
    padding: 4rem  2rem;

    .arrival-wrappers {
      padding-top: 4rem;
      
      .women {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: 780px) {
    padding: 4rem;
    .arrival-wrappers {
      padding-top: 4rem;

      .women {
        margin-bottom: 2rem;
      }
    }
  }
`

export default NewArrivals
