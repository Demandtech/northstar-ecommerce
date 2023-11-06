import { Outlet, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useUserContext } from '../contexts/userContext'
import Navbar from './Navbar'
import Footer from './Footer'

const ProtectedLayout = () => {
  const { authenticated } = useUserContext()

  if (!authenticated) {
    return <Navigate to={'/auth'} />
  }

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
