import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../utils/datas'
import styled from 'styled-components'


const SingleProduct = () => {
  const { id } = useParams()
  let singleProduct = products.find((product) => product.id == id)
  const {img, category, name} = singleProduct
  return (
    <Wrapper>
      <div className='content-wrapper'>
        <div className='left'>
          <img src={img} alt='' />
        </div>
        <div className='right'>
          <div className='link'>
            <span>HOME</span>/<span>SHOP</span>/<span>{category.toUpperCase()}</span>/<Link to={'/'}>SHOP</Link>
          </div>
          <h4>{name}</h4>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 75px;
  padding: 4rem 1rem;

  .content-wrapper {
    .right {
      .link {
        span {
          font-weight: 700;
          font-size: 15px;
          line-height: 17px;
          color: #888888;
        }
      }
    }
  }

  @media screen and (min-width: 480px) {
    padding: 4rem 2rem;
    .content-wrapper {
      display: flex;
      .right {
        flex: 1;
      }
      .left {
        flex: 1;
      }
    }
  }

  @media screen and (min-width: 780px) {
    padding: 4rem;
  }
`
export default SingleProduct
