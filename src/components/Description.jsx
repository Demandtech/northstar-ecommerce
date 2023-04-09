import React, { useState } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../reducers/productsContext'

const Description = ({reviews}) => {
  const [description, setDescription] = useState(true)
  const {singleProduct}  = useProductsContext()
  return (
    <Wrapper>
      <div className='controller'>
        <div
          onClick={() => setDescription(true)}
          className={`${description ? 'active-tab' : ''}`}
        >
          Description
        </div>
        <div
          onClick={() => setDescription(false)}
          className={`${!description ? 'active-tab' : ''}`}
        >
          Reviews({reviews})
        </div>
      </div>
      <div className='options-wrapper'>
        {description ? (
          <div className='description-tab'>
            <p>
              A key objective is engaging digital marketing customers and
              allowing them to interact with the brand through servicing and
              delivery of digital media. Information is easy to access at a fast
              rate through the use of digital communications.
            </p>
            <p>
              Users with access to the Internet can use many digital mediums,
              such as Facebook, YouTube, Forums, and Email etc. Through Digital
              communications it creates a Multi-communication channel where
              information can be quickly exchanged around the world by anyone
              without any regard to whom they are.[28] Social segregation plays
              no part through social mediums due to lack of face to face
              communication and information being wide spread instead to a
              selective audience.
            </p>
          </div>
        ) : (
          <div className='review-tab'>Tes</div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .controller {
    display: inline-flex;
    border-top: 2px solid #ebebeb;
    border-right: 2px solid #ebebeb;
    border-left: 2px solid #ebebeb;

    div {
      padding: 1rem;
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      color: #818181;
      background: #fbfbfb;
      font-family: 'Arimo', sans-serif;
      &:not(:last-child) {
        border-right: 2px solid #ebebeb;
      }
    }

    .active-tab {
      color: #1d1d1d;
      background: #ffffff;
    }
  }

  .options-wrapper {
    border: 2px solid #ebebeb;

    .description-tab {
      padding: 1.5rem;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #555555;
      font-family: 'Lato', sans-serif;

      p:first-child {
        padding-bottom: 2rem;
      }
    }
  }
`

export default Description
