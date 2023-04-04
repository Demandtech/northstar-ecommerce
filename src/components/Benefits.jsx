import React from 'react'
import { benefits } from '../utils/datas'
import styled from 'styled-components'

const Benefits = () => {
  return (
    <Wrapper>
      {benefits.map((ben, i) => {
        return (
          <div key={i} className='card'>
            <div className='icon-wrap'>
              <img src={ben.icon} alt={ben.title} />
            </div>
            <div className="content">
               <h6>{ben.title}</h6>
               <p>{ben.text}</p>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 1rem;
  gap: 0 2rem;
  .card {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    .icon-wrap {
      width: 30px;
      padding-top:5px;
      img {
        width: 100%;
      }
    }
    .content {
      h6 {
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        color: #1d1d1d;
        font-family: 'Baloo 2', cursive;
      }
      p {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 1rem;
        line-height: 19px;
        color: #555555;
      }
    }
  }
  @media screen and (min-width: 480px) {
    padding: 0 2rem;
  }

  @media screen and (min-width: 780px) {
    padding: 0 4rem;
  }
`

export default Benefits