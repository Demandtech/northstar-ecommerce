import React from 'react'
import styled, { css } from 'styled-components'

const AncrButton = (props) => {
  return (
    <BtnWrapper type={props.type} href={props.href}>
      {props.label}
    </BtnWrapper>
  )
}

const BtnWrapper = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  line-height: 22px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;

  ${(props) => {
    return (
      props.type === 'border' &&
      css`
        border: 2px solid #ffffff;
        color: #ffffff;
        font-weight: 700;
        background: transparent;
        background-position: 100%;

        &:hover {
          color: #024e82;
          background-image: -webkit-linear-gradient(
            30deg,
            #ffffff 50%,
            transparent 50%
          );
          background-image: linear-gradient(
            30deg,
            #ffffff 50%,
            transparent 50%
          );
          background-size: 500px;
          background-repeat: no-repeat;
          background-position: 0%;
          -webkit-transition: all 300ms ease-in-out;
          transition: all color 300ms ease-in-out;
        }
      `
    )
  }}

  ${(props) => {
    return (
      props.type === 'secondary' &&
      css`
        color: #024e82;
        font-size: 14px;
        font-weight: 500;
        border: 2px solid #ffffff;
        background-image: -webkit-linear-gradient(
          30deg,
          #ffffff 50%,
          transparent 50%
        );
        background-image: linear-gradient(30deg, #ffffff 50%, transparent 50%);
        background-size: 500px;
        background-repeat: no-repeat;
        background-position: 0%;
        -webkit-transition: all 300ms ease-in-out;
        transition: all color 300ms ease-in-out;

        &:hover {
          background-position: 100%;
          color: #ffffff;
        }
      `
    )
  }}

  ${(props) => {
    return (
      props.type === 'primary' &&
      css`
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        border: 2px solid #024e82;
        background-image: -webkit-linear-gradient(
          30deg,
          #024e82 50%,
          transparent 50%
        );
        background-image: linear-gradient(30deg, #024e82 50%, transparent 50%);
        background-size: 500px;
        background-repeat: no-repeat;
        background-position: 0%;
        -webkit-transition: all 300ms ease-in-out;
        transition: all color 300ms ease-in-out;

        &:hover {
          background-position: 100%;
          color: #024e82;
        }
      `
    )
  }}

  ${(props) => {
    return props.type === 'rounded' && css``
  }}
`

export default AncrButton
