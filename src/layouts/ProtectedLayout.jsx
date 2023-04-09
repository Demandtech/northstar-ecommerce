import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components'
import styled from 'styled-components'


const ProtectedLayout = () => {
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
export default ProtectedLayout