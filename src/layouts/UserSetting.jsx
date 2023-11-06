import styled from 'styled-components'
import { FaSignOutAlt, FaRegUser, FaChevronDown } from 'react-icons/fa'
import { useUserContext } from '../contexts/userContext'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
} from '@chakra-ui/react'

const UserSetting = () => {
  const { handleLogout, user } = useUserContext()

  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        _hover={{ bg: 'gray.400' }}
        as={Button}
        bg={'whiteAlpha.900'}
        rightIcon={<FaChevronDown />}
        _expanded={{ bg: 'whiteAlpha.900' }}
      >
        <FaRegUser />
      </MenuButton>
      <MenuList>
        <MenuItem
        // _hover={{ bg: '#edf2f7' }}
        >
          {user.first_name}
        </MenuItem>
        <Divider />
        <MenuItem
        // _hover={{ bg: '#edf2f7' }}
        >
          Cart
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogout}
          display={'flex'}
          alignItems={'center'}
          gap='10px'
          color={'red.400'}
        >
          Signout
          <FaSignOutAlt />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserSetting
