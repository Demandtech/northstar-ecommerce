import React, { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Navbar, Footer, Loader } from '../components'
import styled from 'styled-components'
import { useUserContext } from '../contexts/userContext'

const ProtectedLayout = () => {
  // const [loading, setLoading] = useState(true)
  const { authenticated } = useUserContext()

  if (!authenticated) {
    return <Navigate to={'/login'} />
  }

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)

  //   window.addEventListener('load', () => {
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1000)
  //   })

  //   return () => clearTimeout(timeoutId)
  // }, [])

  return (
    <>
      (
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
      )
    </>
  )
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
export default ProtectedLayout
