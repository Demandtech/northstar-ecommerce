import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { sizes } from '../utils/datas'

const SelectSize = ({setSizes}) => {
  const [sizeIndex, setSizeIndex] = useState(0)
  const [size, setSize] = useState(sizes[sizeIndex])
  const [opensizeList, setOpenSizeList] = useState(false)
  const containerRef = useRef(null)
  const listcontainerRef = useRef(null)

  
  useEffect(()=>{
    setSizes(size.short)
  }, [size])

  useEffect(() => {
    setSize(sizes[sizeIndex])
  }, [sizeIndex])

  useEffect(() => {
    let height = listcontainerRef.current.getBoundingClientRect().height
    if (opensizeList) {
      containerRef.current.style.height = `${height}px`
   
    } else {
     
      containerRef.current.style.height = `0px`
    }
  }, [opensizeList])

  return (
    <Wrapper>
      <div className='size-selector' >
        <div className='size' onClick={() => setOpenSizeList(!opensizeList)}>
          <span>{size.text} </span>
          <div className='size-icon'>
            <span>{size.short ? size.short : null}</span>|
            {opensizeList ? (
              <FaChevronUp className='icon' />
            ) : (
              <FaChevronDown className='icon' />
            )}
          </div>
        </div>
        <ul
          ref={containerRef}
          className={`${opensizeList ? 'open-list' : null}`}
        >
          <div ref={listcontainerRef}>
            {sizes
              .map((size, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setSizeIndex(index)
                      setOpenSizeList(false)
                    }}
                  >
                    <span>{size.text}</span>
                    <span>{size.short}</span>
                  </li>
                )
              })
              .slice(1)}
          </div>
        </ul>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .size-selector {
    width: 200px;
    border: 1px solid #ebebeb;
    position: relative;
    background: #fbfbfb;
    .size {
      display: flex;
      color: #1d1d1d;
      align-items: center;
      padding: 0.5rem;

      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      .size-icon {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 0.4rem;

        .icon {
          color: #1d1d1d;
        }
      }
    }
    ul {
      overflow: hidden;
      position: absolute;
      width: 100%;
      border-left: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      background: #fbfbfb;
      z-index: 10;
      transition: 0.5s;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.4rem;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #1d1d1d;
        border-bottom: 1px solid #ebebeb;
      }
    }
  }
`

export default SelectSize
