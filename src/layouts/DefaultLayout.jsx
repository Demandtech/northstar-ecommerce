import React from 'react'
import {Navbar} from '../components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const DefaultLayout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1440px;
`

export default DefaultLayout
