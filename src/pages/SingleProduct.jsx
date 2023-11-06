import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Stars, SelectSize, Description, Loader } from '../components'
import { formatPrice } from '../utils/helpers'
import { useCartContext } from '../contexts/cartContext'
import { useProductsContext } from '../contexts/productsContext'
import Socials from '../components/Socials'
import { ProductImages } from '../components'
import { useUserContext } from '../contexts/userContext'
import { Tooltip } from '@chakra-ui/react'

const SingleProduct = () => {
  const { id } = useParams()
  const [size, setSize] = useState('')
  const { addToCart } = useCartContext()
  const { single_product, loading, getSingleProduct } = useProductsContext()
  const { authenticated } = useUserContext()


  const {
    type,
    tags,
    price,
    review,
    rating,
    categories,
    name,
    thumbnails,
    bonus,
    description,
    img,
    sizes,
  } = single_product

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
          <NavLink to={`/products/${type}`}>{type?.toUpperCase()}</NavLink>/
          <NavLink to={`/product/${id}`}>PRODUCT</NavLink>
        </div>
        <div className='content-wrapper'>
          <div className='left'>
            <ProductImages images={thumbnails} bonus={bonus} main={img} />
          </div>
          <div className='right'>
            <h4 className='name'>{name}</h4>
            <Stars rating={rating} review={review} />
            <div className='price'>
              <s className='price'>{formatPrice(price)}</s>{' '}
              <span className='bonus-price'>
                {formatPrice(price - price * (bonus / 100))}
              </span>
            </div>
            <p className='desc'>{description}</p>
            <div className='add-cart-wrapper'>
              <SelectSize item_size={size} sizes={sizes} setSizes={setSize} />
              <div className='add-to-cart'>
                <Tooltip
                  label={
                    (!authenticated && 'Please sign in to add item to cart') ||
                    (size == '' && 'Please select a size')
                  }
                  aria-label='A tooltip'
                  hasArrow
                >
                  <button
                    disabled={size === '' || !authenticated}
                    onClick={() => {
                      const payload = {
                        product_id: +id,
                        product_size: size,
                      }
                      addToCart(payload)
                    }}
                  >
                    ADD TO CART
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className='cate_tags'>
              <div className='category'>
                <strong className='title'>Categories:</strong>
                {categories?.map((cat, ind) => (
                  <span key={ind}>
                    {cat} {ind < categories.length - 1 && ', '}
                  </span>
                ))}
              </div>
              <div className='tags'>
                <strong className='title'>Tags:</strong>
                {tags?.map((tag, ind) => (
                  <span key={ind}>
                    {tag}
                    {ind < tags.length - 1 && ',  '}
                  </span>
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
  padding: 0 1rem;
  .container {
    .link {
      padding: 1rem 0;
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
    padding-bottom: 5rem;
    .left {
      width: 100%;
    }
    .right {
      .name {
        text-transform: capitalize;
      }
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
      .add-cart-wrapper {
        display: flex;
        gap: 2rem;
        flex-direction: column;
        margin-bottom: 1rem;

        .add-to-cart {
          /* margin: 2.5rem 0; */
          button {
            all: unset;
            padding: 1rem 2rem;
            background: #024e82;
            color: #ffffff;
            cursor: pointer;
            box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
            border: 1px solid #024e82;

            &:not(:disabled):hover {
              /* transform: translateY(-1px); */

              background: #ffffff;
              color: #024e82;
            }

            &:disabled {
              background: #cccccc;
              cursor: not-allowed;
              opacity: 0.5;
              background: #024e82;
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
    .content-wrapper {
      .right {
        .add-cart-wrapper {
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }

  @media screen and (min-width: 780px) {
    padding: 1rem 4rem;

    .container {
      .link {
        padding: 1rem 0 2rem 0;
      }
    }
    .content-wrapper {
      flex-direction: row;
      gap: 4rem;
      .right {
        flex: 1;
        padding-right: 7rem;
      }
      .left {
        flex: 1;
      }
    }
  }
`
export default SingleProduct
