import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useUserContext } from '../contexts/userContext'
import { Input, Button } from '../components/reusable'
import { toast } from 'react-toastify'

const ChangePassword = () => {
  const { token } = useParams()
  const { btnLoading, handleChangePassword } = useUserContext()
  const navigate = useNavigate()

  const [data, setData] = useState({
    new_password: '',
    re_new_password: '',
    token: token,
  })

  async function handleForm(e) {
    e.preventDefault()
    if (data.token && data.re_new_password && data.new_password) {
      const isSuccess = await handleChangePassword(data)

      if (isSuccess) {
        toast.success('Password successfully changed!')
        navigate('/auth/login')
      }
    } else {
      toast.info('Please, check all Input!')
    }
  }

  return (
    <Wrapper>
      <div className='con'>
        <h4>Reset Password?</h4>

        <form onSubmit={handleForm}>
          <div>
            <Input
              value={data.new_password}
              type='password'
              placeholder={'Create new password'}
              onchange={(e) =>
                setData({ ...data, new_password: e.target.value })
              }
            />
          </div>
          <div>
            <Input
              value={data.re_new_password}
              type={'password'}
              placeholder={'Confirm your password'}
              onchange={(e) =>
                setData({ ...data, re_new_password: e.target.value })
              }
            />
          </div>
          <Button loading={btnLoading} type='submit' text={'Change'} />
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

export default ChangePassword
