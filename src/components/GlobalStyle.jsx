import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body{
    background: red;
    font-family: 'Arimo' , sans-serif;
  }
  *, 
  *::before, 
  *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle