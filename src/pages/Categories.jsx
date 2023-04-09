import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useProductsContext } from '../reducers/productsContext'

const Categories = () => {
  const {female, male} = useProductsContext()
  return (
    <Wrapper>
      <div className='link'>
        <NavLink to={'/'}>HOME</NavLink>/<NavLink to={'/about'}>About</NavLink>/
        <NavLink to={'/product/category'}>Female</NavLink>
      </div>
      <div className="products">
          
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 75px;
  padding: 4rem 1rem;

  .link {
    a {
      font-weight: 500;
      font-size: 15px;
      line-height: 17px;
      color: #888888;
      text-decoration: none;
      text-transform: uppercase;
    }
    .active {
      color: #1d1d1d;
      font-weight: 900;
      font-size: 15px;
    }
  }

  @media screen and (min-width: 480px) {
    padding: 4rem 2rem;
  }

  @media screen and (min-width: 780px) {
    padding: 4rem;
  }
`
export default Categories