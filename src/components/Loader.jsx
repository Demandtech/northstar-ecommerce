import React from 'react'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'

const Loader = ({loading}) => {
  return (
    <Wrapper className='loader'>
      <BeatLoader color={'#D6763C'} loading={loading} size={20} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
   
`

export default Loader