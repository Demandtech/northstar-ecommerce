import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AllOrder, LatestOrder, EmptyOrder, Loader } from '../components'
import { useCartContext } from '../contexts/cartContext'

const Order = () => {
  const { fetchOrders, orders, loading } = useCartContext()

  useEffect(() => {
    fetchOrders()
  }, [])

  console.log(orders)

  if(loading){
   return <Loader loading={loading}/>
  }  

  if (orders) {
    return (
      <Wrapper>
        <AllOrder orders={orders} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.main`
  margin-top: 75px;
  padding: 2rem 1rem;

  @media screen and (min-width: 480px) {
    padding: 2rem;

    form {
      max-width: 500px;
    }
  }

  @media screen and (min-width: 780px) {
    padding: 1rem 4rem;
  }
`

export default Order
