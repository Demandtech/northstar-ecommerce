import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FounderCard = ({index, name, img }) => {
  //console.log(founder)
  let animation = ''
  if (index == 0) {
    animation = 'fade-right'
  } else if (index == 1) {
    animation = 'fade-down'
  } else if (index == 2) {
    animation = 'fade-up'
  } else if (index == 3) {
    animation = 'fade-left'
  }

   useEffect(() => {
     Aos.init({ duration: 300 })
   }, [])

  return (
    <Wrapper data-aos={animation}>
      <div className='img-wrapper'>
        <img width={'100%'} src={img} alt={name} loading='lazy'/>
      </div>
      <p>{name}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  overflow: hidden;
  padding-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    padding-left: .5rem;
  }
`

export default FounderCard
