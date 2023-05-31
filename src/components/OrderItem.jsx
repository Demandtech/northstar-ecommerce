import React from 'react'
import { formatPrice } from '../utils/helpers'
import { useCartContext } from '../contexts/cartContext'
import { formatTime } from '../utils/helpers'
import Loader from './Loader'

const OrderItem = ({ order }) => {
  const { loading } = useCartContext()

  if (loading) {
    return <Loader />
  }
  return (
    <tr>
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
    </tr>
  )
}

export default OrderItem
