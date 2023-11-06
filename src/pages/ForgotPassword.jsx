import React, { useState } from 'react'
import styled from 'styled-components'
import { useUserContext } from '../contexts/userContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '../components/reusable'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const { handleForgotPassword, btnLoading } = useUserContext()

  async function handleForm(e) {
    e.preventDefault()
    if (email) {
      const isSuccess = await handleForgotPassword(email)
      if (isSuccess) {
        toast.success('Reset password email sent!')
        navigate('/auth/login')
      }
    }
  }

  return (
    <Wrapper>
      <div className='con'>
        <h4>Forgot Your Password?</h4>

        <form>
          <Input
            placeholder='Enter your email'
            type='text'
            onchange={(e) => setEmail(e.target.value)}
          />
          <Button loading={btnLoading} text={'Continue'} onclick={handleForm} />
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  max-width: 1440px;
  background-color: #f5f5f9;
  justify-content: center;
  align-items: center;
  display: flex;

  .con {
    background: #ffffff;
    display: inline-block;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border-radius: 4px;
    min-width: 300px;

    h4 {
      font-size: 1.3rem;
      line-height: 1;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 426px) {
    .con {
      min-width: 380px;

      h4 {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
`

export default ForgotPassword
