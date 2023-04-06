import React from 'react'
import styled from 'styled-components'
import FounderCard from './FounderCard'

const Founders = () => {
  return (
    <Wrapper>
      <div className="founders-wrapper">
          <div className="founder-header">
              <h2>The Founders</h2>
          </div>
          <div className="founders">
             
          </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;
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
`

export default Founders