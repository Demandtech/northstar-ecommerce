import React from 'react'
import styled from 'styled-components'
import { topseller } from '../utils/datas'
import HomeCard from './HomeCard'
import AncrButton from './AncrButton'

const TopSellers = () => {
  console.log(topseller.length)
  return (
    <Wrapper>
      <div className='topseller-header'>
        <h2>Top Sellers</h2>
        <p>Browse our top-selling products</p>
      </div>
      <div className='content-wrap'>
        {topseller.map((seller, index) => {
          return (
            <div key={index}>
              <HomeCard {...seller} />
            </div>
          )
        })}
      </div>
      <div className='btn-wrap'>
        <AncrButton href='#new_arrival' label='shop now' type='primary' />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  
  .topseller-header {
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
  .content-wrap {
    padding: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1.5rem;
  }
  .btn-wrap{
    text-align: center;
  }
`

export default TopSellers
