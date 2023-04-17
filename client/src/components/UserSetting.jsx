import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaSignOutAlt} from 'react-icons/fa'
import { useUserContext } from '../contexts/userContext'

const UserSetting = () => {
 const { handleLogout, handleOpenSetup, user } = useUserContext()

  return (
    <Wrapper>
      <Link onClick={handleOpenSetup} className='link-btn' to={'/profile'}>
       {user.displayName}
      </Link>
      <button className='logout-btn' onClick={handleLogout}>
        <span>Sign Out</span>
        <FaSignOutAlt />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: absolute;
  background-color: #ffffff;
  min-width: 130px;
  padding: 1rem;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 14px;
  text-transform: uppercase;

  .logout-btn {
    all: unset;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: red;
    opacity: 0.5;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .link-btn {
    color: #b1b1b1;
    text-decoration: none;
    font-weight: 500;
    transition: .3s;

    &:hover {
      color: #024e82;
    }
  }
`

export default UserSetting