import { useEffect} from 'react'
import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom'
import { useProductsContext } from '../contexts/productsContext'
import { Loader, ProductCard } from '../components'

const Categories = () => {
  const { type } = useParams()
  const { category, loading, getCategory } = useProductsContext()

  useEffect(() => {
    getCategory(type)
  }, [type])

  return (
    <Wrapper>
      <div className='link'>
        <NavLink to={'/'}>HOME</NavLink>/<NavLink to={'/about'}>About</NavLink>/
        <NavLink to={`/products/${type}`}>{type}</NavLink>
      </div>
      {loading && <Loader loading={loading} />}
      <div className='products-wrapper'>
        {category.map((cat, index) => (
          <ProductCard key={index} {...cat} />
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 75px;
  padding: 4rem 1rem;

  .link {
    margin-bottom: 4rem;
    display: flex;
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
  .products-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1.5rem;
  }

  @media screen and (min-width: 480px) {
    padding: 4rem 2rem;
  }

  @media screen and (min-width: 780px) {
    padding: 4rem;
  }
`
export default Categories
