import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cartContext'
import { GET_QUANTITY, COUNT_CART_TOTALS } from '../actions'

const Quantity = ({ id, quantity }) => {
  const { dispath, cart } = useCartContext()
  const [inputVal, setInputVal] = useState(1)

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  useEffect(() => {
    dispath({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [quantity])

  useEffect(() => {
    dispath({ type: GET_QUANTITY, payload: { inputVal, id } })
  }, [inputVal])

  return (
    <Wrapper>
      <input
        maxLength={2}
        minLength={1}
        onChange={handleChange}
        type='text'
        value={inputVal}
      />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  input {
    width: 53px;
    height: 42px;
    text-align: center;
    border: 1px solid #ebebeb;
  }
`
export default Quantity
