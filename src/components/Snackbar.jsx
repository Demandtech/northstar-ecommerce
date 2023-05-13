import styled from 'styled-components'
import { useCartContext } from '../contexts/cartContext'
import { useEffect } from 'react'
const Snackbar = () => {
  const { showSnackbar } = useCartContext()
 
  return (
    showSnackbar.show && (
      <Wrapper className={``}>
        <div className={showSnackbar ? 'line' : ''}></div>
        <span className='message'> {showSnackbar.msg}</span>
      </Wrapper>
    )
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 75px;
  right: 40px;
  width: 250px;
  background: #333;
  color: #ffffff;

  div {
    height: 4px;
    width: 250px;
    background: green;
  }

  .line {
    animation-name: line-animation;
    animation-duration: 3s;
  }

  .message {
    padding: 10px;
    display: block;
  }

  @keyframes line-animation {
    0% {
      width: 250px;
      opacity: 1;
    }
    100% {
      width: 0;
      opacity: 0.5;
    }
  }
`

export default Snackbar
