import { Outlet, Navigate } from 'react-router-dom'
import { Navbar, Footer } from '../components'
import styled from 'styled-components'
import { useUserContext } from '../contexts/userContext'

const ProtectedLayout = () => {
  const { authenticated } = useUserContext()

  if (!authenticated) {
    return <Navigate to={'/login'} />
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
