import React from 'react'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'

const Loader = ({ loading }) => {
  return (
    <Wrapper className='loader'>
      <BeatLoader color={'#D6763C'} loading={loading} size={20} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

export default Loader
