import React from 'react'
import styled from 'styled-components'
import { ProductCard } from '../components'
import { products } from '../utils/datas'
import { useProductsContext } from '../contexts/productsContext'

const NewArrivals = () => {
  const { males, females } = useProductsContext()

  return (
    <Wrapper id='new_arrival'>
      <div className='newArrivals-header'>
        <h2>Discover NEW Arrivals</h2>
        <p>Recently added shirts!</p>
      </div>
      <div className='arrival-wrappers'>
        <div className='wrap women'>
          {females
            .map((female, i) => {
              return (
                <div key={i}>
                  <ProductCard index = {i} {...female} />
                </div>
              )
            })
            .slice(0, 4)}
        </div>
        <div className='wrap'>
          {males
            .map((male, i) => {
              return (
                <div key={i}>
                  <ProductCard index = {i} {...male} />
                </div>
              )
            })
            .slice(0, 4)}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .newArrivals-header {
    text-align: center;
    h2 {
      font-weight: 700;
      font-size: 2.125rem;
      line-height: 48px;
      font-family: 'Arimo', sans-serif;
      color: #1d1d1d;
    }
    p {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 48px;
      color: #555555;
    }
  }
  .arrival-wrappers {
    padding-top: 4rem;
    .wrap {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 1.5rem;
    }
    .women {
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 480px) {
    // padding: 4rem  2rem;

    .arrival-wrappers {
      padding-top: 4rem;

      .women {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: 780px) {
    padding: 4rem 0;
    .arrival-wrappers {
      padding-top: 4rem;

      .women {
        margin-bottom: 2rem;
      }
    }
  }
`

export default NewArrivals
