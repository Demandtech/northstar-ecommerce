import React, { useEffect, useState } from 'react'
import { Navbar, Footer, Loader } from '../components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const DefaultLayout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000)

    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    })

    return ()=> clearTimeout(timeoutId)
  }, [])

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Container>
          <Navbar />
          <Outlet />
          <Footer />
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export default DefaultLayout
