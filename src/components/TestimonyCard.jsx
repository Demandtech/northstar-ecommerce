import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TestimonyCard = ({index, img, icon, text, name }) => {
   let animation = ''
   if (index == 0) {
     animation = 'fade-right'
   } else if (index == 1) {
     animation = 'fade-left'
   } else if (index == 2) {
     animation = 'fade-right'
   }
  //   else if (index == 3) {
  //    animation = 'fade-left'
  //  }

   useEffect(() => {
     Aos.init({ duration: 1000 })
   }, [])
  return (
    <Wrapper data-aos={animation}>
      <div className='img-wrapper'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <img src={icon} alt='quote-icon' />
        <p>{text}</p>
        <span>{name}</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  .img-wrapper {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    align-self: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .content {
    font-family: 'Baloo 2', cursive;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    img {
      width: 2rem;
    }
    p {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
    span {
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 780px) {
    flex-direction: row;
    max-width: 900px;
    margin: 0 auto;
    .img-wrapper {
      min-width: 200px;
      max-width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .content {
      font-family: 'Baloo 2', cursive;
      font-weight: 500;
      line-height: 36px;
      text-align: left;
      img {
        width: 2rem;
      }
      p {
        margin-top: 0.5rem;
        font-size: 1.5rem;
      }
      span {
        margin-top: 1rem;
        font-size: 1.2rem;
      }
    }
  }
`
export default TestimonyCard
