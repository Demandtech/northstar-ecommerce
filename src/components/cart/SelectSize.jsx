import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
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
    <Menu>
      <MenuButton
        boxShadow={'0px 4px 20px 0px rgba(0, 0, 0, 0.1)'}
        display={'flex'}
        className='btn'
        as={Button}
        height={'62.5px'}
        width={'100%'}
        borderWidth={'1px'}
        rightIcon={<FaChevronDown style={{ marginLeft: 'auto' }} />}
        _hover={{ borderWidth: '1px', bg: 'whiteAlpha.800' }}
        _expanded={{ borderWidth: '1px', bg: '#ffffff' }}
      >
        <div>
          <p>{item_size ? item_size : 'Select Size'}</p>
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
        width={'100%'}
      >
        {sizes?.map((item, index) => (
          <>
            <MenuItem onClick={() => handleClick(index)} key={index}>
              {item}
            </MenuItem>
            {index !== sizes.length - 1 && <Divider />}
          </>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SelectSize
