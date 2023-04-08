import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import styled from 'styled-components'


const Stars = ({rating, review}) => {
 const tempStars = Array.from({length:5}, (_, index)=> {
  const number = index + 0.5


  return(
   <SpanWrapper key={index}>
    {rating >= index + 1 ? <BsStarFill className='star'/> : rating >= number ? <BsStarHalf  className='star'/> : <BsStarFill className='empty' />}
   </SpanWrapper>
  )

 })
  return (
    <Wrapper >
      {tempStars} <span className='review'>({review})</span>
    </Wrapper>
  )
}

const SpanWrapper = styled.span`
  .empty {
    color: rgba(214, 118, 60, 0.38);
  }
  .star {
    color: #d6763c;
    font-size: 13px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .1rem;
  margin-bottom: 1.5rem;
  .review {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #1d1d1d;
    margin-left: .2rem;
  }
`

export default Stars