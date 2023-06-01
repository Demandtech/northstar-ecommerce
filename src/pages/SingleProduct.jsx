import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  Stars,
  SelectSize,
  Description,
  Loader,
} from '../components'
import { formatPrice } from '../utils/helpers'
import { useCartContext } from '../contexts/cartContext'
import { useProductsContext } from '../contexts/productsContext'
import Socials from '../components/Socials'
import ProductImages from '../components/ProductImages'

const SingleProduct = () => {
  const { id } = useParams()
  const { addToCart } = useCartContext()
  const [sizes, setSizes] = useState('')


  const { singleProduct, loading, getSingleProduct} =
    useProductsContext()

  const {
    type,
    tags,
    price,
    review,
    rating,
    category,
    name,
    thumbnails,
    bonus,
    description,
  } = singleProduct

  useEffect(() => {
    getSingleProduct(id)
  }, [id])



  if (loading) {
    return (
      <div style={{ marginTop: '100px' }}>
        <Loader loading={loading} />
      </div>
    )
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='link'>
          <NavLink to={'/'}>HOME</NavLink>/
          <NavLink to={`/products/${type}`}>
            {type?.toUpperCase()}
          </NavLink>
          /<NavLink to={`/product/${id}`}>PRODUCT</NavLink>
        </div>
        <div className='content-wrapper'>
          <div className='left'>
            <ProductImages images={thumbnails} bonus={bonus} />
          </div>
          <div className='right'>
            <h4>{name}</h4>
            <Stars rating={rating} review={review} />
            <div className='price'>
              <s className='price'>{formatPrice(price)}</s>{' '}
              <span className='bonus-price'>
                {formatPrice(price - price * (bonus / 100))}
              </span>
            </div>
            <p className='desc'>{description}</p>
            <SelectSize setSizes={setSizes} />
            <div className='add-to-cart'>
              <button
                disabled={sizes === ''}
                onClick={() => {
                  addToCart(id, sizes, 1)
                }}
              >
                ADD TO CART
              </button>
            </div>
            <div className='cate_tags'>
              <div className='category'>
                <span className='title'>Category:</span>
                {category?.map((cat, ind) => (
                  <span key={ind}>{cat}, </span>
                ))}
              </div>
              <div className='tags'>
                <span className='title'>Tags:</span>
                {tags?.map((tag, ind) => (
                  <span key={ind}>{tag}</span>
                ))}
              </div>
            </div>
            <Socials />
          </div>
        </div>
        <Description reviews={review} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 75px;
  padding: 2rem 1rem;
  .container {
    .link {
      padding: 1rem 0 2rem 0;
      a {
        font-weight: 500;
        font-size: 15px;
        line-height: 17px;
        color: #888888;
        text-decoration: none;
      }
      .active {
        color: #1d1d1d;
        font-weight: 900;
        font-size: 15px;
      }
    }
  }
  .content-wrapper {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    padding-bottom: 10rem;
    .left {
      width: 100%;
    }
    .right {
      .price {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #818181;
        margin-bottom: 1.5rem;
      }
      .desc {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #555555;
        margin-bottom: 3rem;
      }
      .bonus-price {
        color: #024e82;
        margin-left: 0.5rem;
      }
      h4 {
        font-family: 'Arimo', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 48px;
        color: #1d1d1d;
        margin-bottom: 1rem;
      }
      .add-to-cart {
        margin: 2.5rem 0;
        button {
          all: unset;
          padding: 1rem 2rem;
          background: #024e82;
          color: #ffffff;
          cursor: pointer;

          &:hover {
            transform: translateY(-1px);
          }

          &:disabled {
            background: #cccccc;
            cursor: not-allowed;
            opacity: 0.5;

            &:hover {
              transform: translateY(0);
            }
          }
        }
      }
      .cate_tags {
        margin-bottom: 2rem;
        .category {
          padding-bottom: 1rem;

          .title {
            padding-right: 0.3rem;
          }
        }
        .tags {
          .title {
            padding-right: 0.3rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 480px) {
    padding: 2rem;
  }

  @media screen and (min-width: 780px) {
    padding: 1rem 4rem;
    .content-wrapper {
      flex-direction: row;
      gap: 4rem;
      .right {
        flex: 1;
        padding-right: 7rem;
      }
      .left {
        flex: 1;

        .main-img {
          width: 100%;
          min-height: 500px;
          margin-bottom: 0.8rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`
export default SingleProduct
