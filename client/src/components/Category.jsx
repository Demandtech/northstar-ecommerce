import React, {useEffect} from 'react'
import styled from 'styled-components'
import maleImg from '../assets/images/male.jpeg'
import femaleImg from '../assets/images/female.jpeg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useProductsContext } from '../contexts/productsContext'

const Category = () => {
  const { getCategory } = useProductsContext()
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Wrapper>
      <div className='category-wrapper'>
        <div className='female category' data-aos='zoom-in'>
          <Link to='/product/category' onClick={()=> getCategory('female')}>Buy Now</Link>
        </div>
        <div className='male category' data-aos='zoom-in'>
          <Link to='/product/category' onClick={()=> getCategory('male')}>Buy Now</Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .category-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .category {
      font-family: 'Lato', sans-serif;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 2rem;
      min-height: 400px;

      a {
        display: inline-block;
        text-decoration: none;
        background: #ffffff;
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.04);
        color: #14517b;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.5rem;
        padding: 1rem 2rem;
        line-height: 20px;
        border-radius: 26px;
        transition: 0.5s;

        &:hover {
          transform: translateY(-1px);
        }
      }
    }

    .male {
      flex: 1;
      background: url(${maleImg}) no-repeat center;
      background-size: cover;
      height: 100%;
    }
    .female {
      flex: 1;
      background: url(${femaleImg}) no-repeat center;
      background-size: cover;
      height: 100%;
    }
  }
  @media screen and (min-width: 480px) {
    .category-wrapper {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 780px) {
    
  }
`

export default Category