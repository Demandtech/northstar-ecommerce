import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Loader } from '../components'

const GuestLayout = () => {
 const [loading, setLoading] = useState(true)
 useEffect(() => {
   const timeoutId = setTimeout(() => {
     setLoading(false)
   }, 2000)

   window.addEventListener('load', () => {
     setTimeout(() => {
       setLoading(false)
     }, 1000)
   })

   return () => clearTimeout(timeoutId)
 }, [])

 if(loading){
  return <Loader />
 }

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