import React from 'react'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'

const Loader = ({loading}) => {
  return (
    <Wrapper className='loader'>
      <div className='name'>NorthStar</div>
      <BeatLoader color={'#D6763C'} loading={loading} size={20} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  .name{
    font-size: 2rem;
  }
`

export default Loader