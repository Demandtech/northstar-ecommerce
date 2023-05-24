import React, { useEffect, useState } from 'react'
import { Navbar, Footer, Loader } from '../components'
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
  overflow-x: hidden;
`

export default DefaultLayout
