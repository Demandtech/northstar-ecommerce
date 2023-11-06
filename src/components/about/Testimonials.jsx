import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../../contexts/productsContext'
import TestimonyCard from './TestimonyCard'

const Testimonials = () => {
  const { testimonies } = useProductsContext()
  return (
    <Wrapper>
      <div className='testimonials-header'>
        <h2>Testimonials</h2>
      </div>
      <div className='testimonial-content'>
        {testimonies?.map((testimony, index) => {
          return (
            <div key={index}>
              <TestimonyCard index={index} {...testimony} />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 padding-bottom: 4rem;
 .testimonial-content{
   display: flex;
   flex-direction: column;
   gap: 5rem;
 }
  .testimonials-header {
    text-align: center;
    padding: 4rem 0;
    h2 {
      font-weight: 700;
      font-size: 2.125rem;
      line-height: 48px;
      font-family: 'Arimo', sans-serif;
      color: #1d1d1d;
    }
  }
`
export default Testimonials
