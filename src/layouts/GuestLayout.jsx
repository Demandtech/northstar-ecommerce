import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const GuestLayout = () => {


  return (
    <Container>
      <Outlet />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export default GuestLayout