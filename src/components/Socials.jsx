import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaLinkedin,
  FaRegEnvelope,
} from 'react-icons/fa'
import styled from 'styled-components'

const Socials = () => {
  return (
    <Wrapper>
      <FaFacebook className='icon' />
      <FaTwitter className=' icon' />
      <FaGooglePlus className='icon' />
      <FaLinkedin className='icon' />
      <FaRegEnvelope className='icon' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: .5rem;

  .icon {
    font-size: 2rem;
    cursor: pointer;
    transition: .5s;

    &:nth-child(1) {
      color: #1877f2;
    }
    &:nth-child(2) {
      color: #1da1f2;
    }
    &:nth-child(3) {
      color: #db4437;
    }
    &:nth-child(4) {
      color: #0077b5;
    }
    &:nth-child(5){
     color: #818181;
    }

    &:hover{
     transform: translateY(-3px);
    }
  }
`

export default Socials