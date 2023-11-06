import React from 'react'
import { formatPrice, formatTime } from '../../utils/helpers'
import { useCartContext } from '../../contexts/cartContext'
import { Loader } from '../../components'
import styled from 'styled-components'

const OrderItem = ({ order }) => {
  const { loading, cart } = useCartContext()

  if (loading) {
    return <Loader />
  }
  return (
    <Wrapper>
      <td>{order.order_number}</td>
      <td>
        {order.item.length === 1
          ? `${order.item.length} Item`
          : `${order.item.length} Items`}
      </td>
      <td>{formatPrice(order.amount)}</td>
      <td>{formatTime(order.createdAt)}</td>
      <td>{order.status}</td>
      <td>
        <button>Select</button>
      </td>
    </Wrapper>
  )
}

const Wrapper = styled.tr`
  td {
    padding: 0.8rem 0.2rem;
    font-size: 0.8rem;

    button {
      all: unset;
    }
  }
  @media screen and (min-width: 780px) {
    td {
      padding: 0.8rem;
      font-size: 1rem;
    }
  }
`

export default OrderItem
