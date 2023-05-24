import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  body{
    font-family: 'Arimo' , sans-serif;
    max-width: 1440px;
    margin: 0 auto;
    overflow-x:hidden
    background-color: yellow;
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