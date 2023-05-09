import React from 'react'
import styled from 'styled-components'
import { founders } from '../utils/datas'
import FounderCard from './FounderCard'

const Founders = () => {
  return (
    <Wrapper>
      <div className="founders-wrapper">
          <div className="founder-header">
              <h2>The Founders</h2>
          </div>
          <div className="founders">
             {founders.map((founder, index)=>{
               return (
                 <div key={index}>
                   <FounderCard index={index} {...founder} />
                 </div>
               )
             })}
          </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 1rem;
  background: #fbfbfb;
  .founder-header {
    text-align: center;
    padding-bottom: 3rem;

    h2 {
      font-weight: 700;
      font-size: 2.125rem;
      line-height: 48px;
      font-family: 'Arimo', sans-serif;
      color: #1d1d1d;
    }
  }
  .founders {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1.5rem;
  }

  @media screen and (min-width: 480px) {
    padding: 4rem 2rem;
  }

  @media screen and (min-width: 780px) {
    padding: 4rem;
  }
`

export default Founders