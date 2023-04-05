import React from 'react'
import styled, {css} from 'styled-components'

const AncrButton = (props) => {
  return (
    <BtnWrapper href={props.href} type={props.type} >
       {props.label}
    </BtnWrapper>
  )
}

const BtnWrapper = styled.a`
  text-decoration: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  line-height: 22px;
  text-transform: uppercase;
  background: transparent;
  font-family: 'Lato', sans-serif;

  ${(props) => {
    return (
      props.type === 'border' &&
      css`
        border: 2px solid #ffffff;
        color: #ffffff;
        font-weight: 700;
      `
    )
  }}

  ${(props) => {
    return (
      props.type === 'primary' &&
      css`
        background: #ffffff;
        color: #024e82;
        font-size: 14px;
        font-weight: 500;
      `
    )
  }}
`

export default AncrButton