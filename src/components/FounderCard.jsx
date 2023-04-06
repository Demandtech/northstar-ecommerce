import React from 'react'
import styled from 'styled-components'

const FounderCard = ({ name, img }) => {
  //console.log(founder)
  return (
    <Wrapper>
      <div className='img-wrapper'>
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img-wrapper {
    height: 250px;
    margin-bottom: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    font-weight: 700;
    font-size: 21px;
    line-height: 24px;
    color: #1d1d1d;
  }
`

export default FounderCard
