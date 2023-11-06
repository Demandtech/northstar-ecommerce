import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/reusable'
import { useUserContext } from '../contexts/userContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Verify = () => {
  const { btnLoading, handleVerifyUser } = useUserContext()
  const { token } = useParams()
  const navigate = useNavigate()

  async function handleForm(e) {
    e.preventDefault()

    const isSuccess = await handleVerifyUser(token)
    if (isSuccess) {
      navigate('/auth/login')
      toast.success('Email verified successfully')
    }
  }

  return (
    <Wrapper>
      <div className='con'>
        <h4>Verify your email Address</h4>

        <form>
          <Button
            loading={btnLoading}
            text={'Verify Email'}
            onclick={handleForm}
          />
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

export default Verify
