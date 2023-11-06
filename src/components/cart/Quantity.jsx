import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../contexts/cartContext'
import { GET_QUANTITY } from '../../actions'

const Quantity = ({ id, quantity }) => {
  const { dispatch, cart } = useCartContext()
  const [inputVal, setInputVal] = useState(quantity)

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  useEffect(() => {
    dispatch({ type: GET_QUANTITY, payload: { inputVal, id } })
  }, [inputVal])

  return (
    <Wrapper>
      <input min={1} onChange={handleChange} type='number' value={inputVal} />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  input {
    width: 35px;
    height: 42px;
    text-align: center;
    border: 1px solid #ebebeb;
  }

  @media screen and (min-width: 480px) {
    input {
      width: 50px;
    }
  }
`
export default Quantity
