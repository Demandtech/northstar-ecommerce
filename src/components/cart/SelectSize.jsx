import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
  Center,
} from '@chakra-ui/react'

const SelectSize = ({ setSizes, sizes, item_size }) => {
  const [size, setSize] = useState()

  const handleClick = (index) => {
    setSizes(sizes[index])
  }

  return (
    <Wrapper>
      <Menu>
        <MenuButton className='btn' as={Button}>
          <div>
            <p>{item_size ? item_size : 'Select Size'}</p>

            <FaChevronDown style={{ marginLeft: 'auto' }} />
          </div>
        </MenuButton>
        <MenuList
          display={'flex'}
          flexDir={'column'}
          bg={'#ffffff'}
          shadow={'0px 4px 20px 0px rgba(0, 0, 0, 0.1)'}
          overflow={'hidden'}
          borderRadius={'4px'}
          zIndex={10}
          width={172}
        >
          {sizes?.map((item, index) => (
            <MenuItem
              onClick={() => handleClick(index)}
              key={index}
              _hover={{ bg: '#f5f5f9' }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 172px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  height: 50px;
  display: flex;
  align-items: center;

  .btn {
    width: 150px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  button {
    all: unset;
    padding: 10px;
    display: flex;
    gap: 0.5rem;
    cursor: pointer;

    &:not(:nth-child(1)) {
      border-top: 1px solid #e2e2e2;
    }
  }
`

export default SelectSize
