import React, { useEffect, useState } from 'react'
import { useParams, Link, NavLink } from 'react-router-dom'
import { products } from '../utils/datas'
import styled from 'styled-components'
import { Stars, SelectSize, Description } from '../components'
import { formatPrice } from '../utils/helpers'
import { useCartContext } from '../contexts/cartContext'
import Socials from '../components/Socials'

const SingleProduct = () => {
  const { id } = useParams()
  const { addToCart } = useCartContext()
  const [sizes, setSizes] = useState('M')
  let singleProduct = products.find((product) => product.id === Number(id))

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
    desc,
  } = singleProduct
  // const addSize = (size)=>{
  //  singleProduct.sizes = size
  // }
  const [imgIndex, setImgIndex] = useState(0)
  const [mainImg, setMainImg] = useState(thumbnails[imgIndex])

  useEffect(() => {
    setMainImg(thumbnails[imgIndex])
  }, [imgIndex])
  return (
    <Wrapper>
      <div className='content-wrapper'>
        <div className='left'>
          <div className='main-img'>
            <img src={mainImg} alt='' />
            <div className='percent'>
              <span>-{bonus}%</span>
            </div>
          </div>
          <div className='img-pagination'>
            {thumbnails.map((thumb, index) => {
              return (
                <div
                  className={`${index === imgIndex ? 'active-pag' : null} pag`}
                  onClick={() => setImgIndex(index)}
                  key={index}
                >
                  <img src={thumb} alt='' />
                </div>
              )
            })}
          </div>
        </div>
        <div className='right'>
          <div className='link'>
            <NavLink to={'/'}>HOME</NavLink>/
            <NavLink to={'/product/category'}>{type.toUpperCase()}</NavLink>/
            <NavLink to={`/product/${id}`}>PRODUCT</NavLink>
          </div>
          <h4>{name}</h4>
          <Stars rating={rating} review={review} />
          <div className='price'>
            <s className='price'>{formatPrice(price)}</s>{' '}
            <span className='bonus-price'>
              {formatPrice(price - price * (bonus / 100))}
            </span>
          </div>
          <p className='desc'>{desc}</p>
          <SelectSize setSizes={setSizes} />
          <div className='add-to-cart'>
            <button
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
              {category.map((cat, ind) => (
                <span key={ind}>{cat}, </span>
              ))}
            </div>
            <div className='tags'>
              <span className='title'>Tags:</span>
              {tags.map((tag, ind) => (
                <span key={ind}>{tag}</span>
              ))}
            </div>
          </div>
          <Socials />
        </div>
      </div>
      <Description reviews={review} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 75px;
  padding: 2rem 1rem;

  .content-wrapper {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    padding-bottom: 10rem;
    .left {
      width: 100%;

      .main-img {
        width: 100%;
        height: 500px;
        margin-bottom: .5rem;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .percent{
          font-family: 'Arimo', sans-serif;
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-weight: 700;
          font-size: 15px;
          line-height: 17px;
          background: #D6763C;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #ffffff;
        }
      }
      .img-pagination {
        display: flex;
        width: 100%;
        gap: .5rem;

        .pag {
          flex: 1;
          max-height: 7rem;
          border: 2px solid #ffffff;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover:
          }
        }
        .active-pag{
          opacity: 0.5;
          border: 2px solid #024E82;
        }
      }
    }
    .right {
      flex: 2;
      .link {
         padding-bottom: .5rem;
         a {
           font-weight: 500;
           font-size: 15px;
           line-height: 17px;
           color: #888888;
           text-decoration: none;
         }
         .active{
          color: #1D1D1D;
          font-weight: 900;
           font-size: 15px;
         }
      }
      .price {
         font-family: 'Lato', sans-serif;
         font-weight: 400;
         font-size: 24px;
         line-height: 29px;
         color: #818181;
         margin-bottom: 1.5rem;
      }
      .desc{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #555555;
         margin-bottom: 3rem;
      }
      .bonus-price{
         color: #024E82;
         margin-left: .5rem;
      }
      h4{
         font-family: 'Arimo', sans-serif;
         font-weight: 700;
         font-size: 2rem;
         line-height: 48px;
         color: #1D1D1D;
         margin-bottom: 1rem;
      }
      .add-to-cart{
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
    }
    
   }
  .cate_tags{
     margin-bottom: 2rem;
     .category{
      padding-bottom: 1rem;

      .title{
        padding-right: .3rem;
      }
     }
     .tags{
      .title{
        padding-right: .3rem;
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
      .right {
        flex: 2;
        padding-right: 7rem;
      }
      .left {
        flex: 1.5;

      .main-img {
        width: 100%;
        min-height: 500px;
        margin-bottom: .8rem;

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
