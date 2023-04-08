import React from 'react'
import {Navbar, Footer} from '../components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const DefaultLayout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export default DefaultLayout
