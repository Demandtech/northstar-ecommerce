import React from 'react'
import styled from 'styled-components'
import { Loader, ProductCard } from '../components'
import { useProductsContext } from '../contexts/productsContext'

const NewArrivals = () => {
  const { products, loading } = useProductsContext()

  return (
    <Wrapper id='new_arrival'>
      <div className='newArrivals-header'>
        <h2>Discover NEW Arrivals</h2>
        <p>Recently added shirts!</p>
      </div>
      {loading && <Loader loading={loading}/>}
      <div className='arrival-wrappers'>
        <div className='wrap'>
          {products
            .map((product, i) => {
              return (
                <div key={i}>
                  <ProductCard index = {i} {...product} />
                </div>
              )
            }).slice(0, 8)}
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
